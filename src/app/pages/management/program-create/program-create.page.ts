/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-program-create',
  templateUrl: './program-create.page.html',
  styleUrls: ['./program-create.page.scss'],
})
export class ProgramCreatePage implements OnInit {
  logoDomain = environment.appUrl;
  form: FormGroup;
  addVideoLinkForm: FormGroup;
  addImageForm: FormGroup;
  languages: Array<any>;
  populationGroups: Array<any>;
  focuses: Array<any>;
  defaultNewImageUrl = 'assets/images/add-image.svg';
  newImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.defaultNewImageUrl
  );
  organizationId;
  availableOrganizations$: Observable<any>;

  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder,
    private inAppMessageService: InAppMessageService,
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private navController: NavController
  ) {
    this.initForm();
  }

  ngOnInit() {
    const options = {
      languages: 'true',
      populationGroups: 'true',
      focuses: 'true'
    };
    this.dashboardService.getOptions(options).subscribe((res) => {
      this.languages = res.languages;
      this.focuses = res.focuses;
      this.populationGroups = res.populationGroups;
    });

    if (this.authService.userRole === UserRole.organizationAdmin) {
      this.organizationId =
        this.authService.userProfile$.getValue().profile.organization.id;
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.getOrganizationSelections(
        this.authService.userProfile$.getValue().profile.neighbourhood.id
      );
    }

    if (this.authService.userRole === UserRole.superAdmin) {
      this.availableOrganizations$ = this.dashboardService.getAllOrganizations();
    }

    this.initForm();
    this.initAddVideoLinkForm();
    this.initAddImageForm();
  }

  getOrganizationSelections(neighbourhoodId) {
    this.availableOrganizations$ =
      this.dashboardService.getOrganizationsByNeighbourhoodId(neighbourhoodId);
  }

  initForm() {
    this.form = this.fb.group({
      description: [null],
      eligibility: [null],
      enabled: [false],
      fee: [null],
      focuses: [null],
      frequency: [null],
      how_to_apply: [null],
      id: [null],
      images: [null],
      languages: [null],
      location: [null],
      name: [null, [Validators.required]],
      neighbourhoods: [null],
      organization: [this.organizationId, [Validators.required]],
      population_groups: [null],
      staff_contact: [null],
      staff_name: [null],
      video_links: [null],
      view_count: [0],
    });
  }

  initAddVideoLinkForm() {
    this.addVideoLinkForm = this.fb.group({
      name: [null, [Validators.required]],
      link: [null, [Validators.required]],
      program: [this.form.get('id').value],
    });
  }

  initAddImageForm() {
    this.addImageForm = this.fb.group({
      name: [null, [Validators.required]],
      image: [null, [Validators.required]],
      program: [this.form.get('id').value],
    });
  }

  removeVideoLink(videoLink, program, index) {
    this.dashboardService.removeProgramVideoLink(videoLink).subscribe((_) => {
      program.video_links.splice(index, 1);
    });
  }

  addVideoLink(program) {
    if (this.addVideoLinkForm.invalid) {
      return;
    }
    this.dashboardService
      .addProgramVideoLink(this.addVideoLinkForm.value)
      .subscribe((res) => {
        this.addVideoLinkForm.reset();
        this.inAppMessageService.simpleToast(
          'A new video link has been added.',
          'bottom'
        );
        program.video_links.push(res);
      });
  }

  toggleLanguage(language) {
    this.form.markAsDirty();
    language.selected = !language.selected;
  }

  togglePopulationGroup(populationGroup) {
    this.form.markAsDirty();
    populationGroup.selected = !populationGroup.selected;
  }

  toggleFocus(focus) {
    this.form.markAsDirty();
    focus.selected = !focus.selected;
  }

  toggleNeighbourhood(neighbourhood) {
    this.form.markAsDirty();
    neighbourhood.selected = !neighbourhood.selected;
  }

  newImageOnChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        URL.createObjectURL(file)
      );
      this.addImageForm.get('image').setValue(file);
    }
  }

  addNewImage(program) {
    if (this.addImageForm.invalid) {
      return;
    }
    this.dashboardService
      .addProgramImage(this.addImageForm.value)
      .subscribe((res) => {
        this.addImageForm.reset();
        this.inAppMessageService.simpleToast(
          'A new image has been added.',
          'bottom'
        );
        const image = Object.assign({}, res);
        image.image = this.logoDomain + res.image;
        program.images.push(image);
        this.newImageUrl = this.defaultNewImageUrl;
      });
  }

  removeImage(image, program, index) {
    this.dashboardService.removeProgramImage(image).subscribe((_) => {
      program.images.splice(index, 1);
      this.inAppMessageService.simpleToast('Removed.', 'bottom');
    });
  }

  create() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.inAppMessageService.simpleToast('Please fill in all required fields.', 'bottom');
      return;
    }
    const payload = Object.assign({}, this.form.value);
    payload.neighbourhoods = [];
    const selectedLanguages = this.languages.filter(
      (language) => language.selected
    );
    const selectedPopulationGroups = this.populationGroups.filter(
      (populationGroup) => populationGroup.selected
    );
    const selectedFocuses = this.focuses.filter((focus) => focus.selected);
    payload.languages = selectedLanguages;
    payload.population_groups = selectedPopulationGroups;
    payload.focuses = selectedFocuses;

    this.dashboardService.createProgram(payload).subscribe((res) => {
      this.inAppMessageService.simpleAlert(
        'Message',
        'Program has been created.',
        'OK',
        false,
        () => this.navController.navigateForward(`program-edit/${res.id}`)
      );
    });
  }
}
