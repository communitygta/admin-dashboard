/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-program-edit',
  templateUrl: './program-edit.page.html',
  styleUrls: ['./program-edit.page.scss'],
})
export class ProgramEditPage implements OnInit {
  logoDomain = environment.appUrl;
  form: FormGroup;
  addVideoLinkForm: FormGroup;
  addImageForm: FormGroup;
  languages = this.appService.appData.Language;
  populationGroups = this.appService.appData.PopulationGroup;
  focuses = this.appService.appData.Focus;
  defaultNewImageUrl = 'assets/images/add-image.svg';
  newImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.defaultNewImageUrl
  );
  availableOrganizations: Array<any>;
  currentOrganization;
  program$ = this.dashboardService
    .getProgramById(this.activatedRoute.snapshot.params.id)
    .pipe(
      tap((res) => {
        this.languages.map((language) => {
          language.selected = !!res.languages.find(
            (item) => item.id === language.id
          );
          return language;
        });
        this.populationGroups.map((populationGroup) => {
          populationGroup.selected = !!res.population_groups.find(
            (item) => item.id === populationGroup.id
          );
          return populationGroup;
        });
        this.focuses.map((focus) => {
          focus.selected = !!res.focuses.find((item) => item.id === focus.id);
          return focus;
        });
        this.form.patchValue(res);
        this.initAddVideoLinkForm();
        this.initAddImageForm();
      })
    );

  constructor(
    private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private inAppMessageService: InAppMessageService,
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private authService: AuthService
  ) {
    this.initForm();
  }

  ngOnInit() {
    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.getOrganizationSelections(
        this.authService.userProfile$.getValue().profile.neighbourhood
      );
    }

    if (this.authService.userRole === UserRole.organizationAdmin) {
      this.currentOrganization = this.appService.appData.Organization.find(
        (item) =>
          item.id ===
          this.authService.userProfile$.getValue().profile.organization
      );
    }
  }

  get logo() {
    return this.form.controls.logo;
  }

  getOrganizationSelections(neighbourhoodId) {
    this.availableOrganizations = this.appService.appData.Organization.filter(
      (item) => item.neighbourhood?.id === neighbourhoodId
    );
  }

  initForm() {
    this.form = this.fb.group({
      description: [null],
      eligibility: [null],
      enabled: [null],
      fee: [null],
      focuses: [null],
      frequency: [null],
      how_to_apply: [null],
      id: [null],
      images: [null],
      languages: [null],
      location: [null],
      name: [null],
      neighbourhoods: [null],
      organization: [null],
      population_groups: [null],
      staff_contact: [null],
      staff_name: [null],
      video_links: [null],
      view_count: [null],
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

  save() {
    const payload = Object.assign({}, this.form.value);
    delete payload.neighbourhood;
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
    this.dashboardService.updateProgram(payload).subscribe((res) => {
      this.inAppMessageService.simpleAlert(
        'Message',
        'Program has been updated.'
      );
      this.form.patchValue(res);
      this.form.markAsPristine();
    });
  }
}
