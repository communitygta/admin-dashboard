/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';
import { environment } from 'src/environments/environment';
declare let Quill;

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
  languages: Array<any>;
  populationGroups: Array<any>;
  focuses: Array<any>;
  defaultNewImageUrl = 'assets/images/add-image.svg';
  newImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.defaultNewImageUrl
  );
  availableOrganizations: Array<any>;
  currentOrganization;
  program$: Observable<any>;
  descriptionEditor: any;
  eligibilityEditor: any;
  frequencyEditor: any;
  howToApplyEditor: any;
  editorConfig = {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
      ]
    },
    theme: 'snow'
  };

  constructor(
    private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private inAppMessageService: InAppMessageService,
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    this.initForm();
  }

  ngOnInit() {
    if (this.authService.userRole === UserRole.superAdmin) {
      this.program$ = this.dashboardService.getAllOrganizations().pipe(
        switchMap((organizations) => {
          this.availableOrganizations = organizations;
          return this.getProgram();
        })
      );
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.program$ = this.dashboardService
        .getOrganizationsByNeighbourhoodId(
          this.authService.userProfile$.getValue().profile.neighbourhood.id
        )
        .pipe(
          switchMap((organizations) => {
            this.availableOrganizations = organizations;
            return this.getProgram();
          })
        );
    }

    if (this.authService.userRole === UserRole.organizationAdmin) {
      this.currentOrganization =
        this.authService.userProfile$.getValue().profile.organization;
      this.program$ = this.getProgram();
    }
  }

  getProgram(): Observable<any> {
    const options = {
      languages: 'true',
      populationGroups: 'true',
      focuses: 'true',
    };
    return this.dashboardService.getOptions(options).pipe(
      switchMap((res) => {
        this.languages = res.languages;
        this.populationGroups = res.populationGroups;
        this.focuses = res.focuses;
        return this.dashboardService
          .getProgramById(this.activatedRoute.snapshot.params.id)
          .pipe(
            tap((program) => {
              this.languages.map((language) => {
                language.selected = !!program.languages.find(
                  (item) => item.id === language.id
                );
                return language;
              });
              this.populationGroups.map((populationGroup) => {
                populationGroup.selected = !!program.population_groups.find(
                  (item) => item.id === populationGroup.id
                );
                return populationGroup;
              });
              this.focuses.map((focus) => {
                focus.selected = !!program.focuses.find(
                  (item) => item.id === focus.id
                );
                return focus;
              });
              this.form.patchValue(program);
              this.form.controls.organization.setValue(program.organization.id);
              this.initAddVideoLinkForm();
              this.initAddImageForm();
              this.setupQuillEditors(program);
            })
          );
      })
    );
  }

  get logo() {
    return this.form.controls.logo;
  }

  setupQuillEditors(program) {
    setTimeout(() => {
      // init descriptionEditor
      this.descriptionEditor = new Quill('#descriptionEditor', this.editorConfig);
      const descriptionDelta = this.descriptionEditor.clipboard.convert(program.description || '');
      this.descriptionEditor.setContents(descriptionDelta, 'api');
      this.descriptionEditor.on('text-change', () => {
        const converter = new QuillDeltaToHtmlConverter(this.descriptionEditor.getContents().ops, {});
        const html = converter.convert();
        this.form.controls.description.setValue(html);
        this.form.markAsDirty();
      });
      // init eligibilityEditor
      this.eligibilityEditor = new Quill('#eligibilityEditor', this.editorConfig);
      const eligibilityDelta = this.eligibilityEditor.clipboard.convert(program.eligibility || '');
      this.eligibilityEditor.setContents(eligibilityDelta, 'silent');
      this.eligibilityEditor.on('text-change', () => {
        const converter = new QuillDeltaToHtmlConverter(this.eligibilityEditor.getContents().ops, {});
        const html = converter.convert();
        this.form.controls.eligibility.setValue(html);
        this.form.markAsDirty();
      });
      // init frequencyEditor
      this.frequencyEditor = new Quill('#frequencyEditor', this.editorConfig);
      const frequencyDelta = this.frequencyEditor.clipboard.convert(program.frequency || '');
      this.frequencyEditor.setContents(frequencyDelta, 'silent');
      this.frequencyEditor.on('text-change', () => {
        const converter = new QuillDeltaToHtmlConverter(this.frequencyEditor.getContents().ops, {});
        const html = converter.convert();
        this.form.controls.frequency.setValue(html);
        this.form.markAsDirty();
      });
      // init howToApplyEditor
      this.howToApplyEditor = new Quill('#howToApplyEditor', this.editorConfig);
      const howToApplyDelta = this.howToApplyEditor.clipboard.convert(program.how_to_apply || '');
      this.howToApplyEditor.setContents(howToApplyDelta, 'silent');
      this.howToApplyEditor.on('text-change', () => {
        const converter = new QuillDeltaToHtmlConverter(this.howToApplyEditor.getContents().ops, {});
        const html = converter.convert();
        this.form.controls.how_to_apply.setValue(html);
        this.form.markAsDirty();
      });
    }, 500);
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
      name: [null, [Validators.required]],
      neighbourhoods: [null],
      organization: [null, [Validators.required]],
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

  async removeVideoLink(videoLink, program, index) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Are you sure to delete this video?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes, delete',
          cssClass: 'danger',
          handler: () => {
            this.dashboardService
              .removeProgramVideoLink(videoLink)
              .subscribe((_) => {
                program.video_links.splice(index, 1);
              });
          },
        },
      ],
    });

    alert.present();
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
      event.target.value = '';
    }
  }

  addNewImage(program) {
    if (this.addImageForm.invalid) {
      if (this.addImageForm.controls.image.invalid) {
        this.inAppMessageService.simpleToast(
          'Please upload a new image',
          'bottom'
        );
        return;
      }
      if (this.addImageForm.controls.name.invalid) {
        this.inAppMessageService.simpleToast(
          'Please input a name for the new image',
          'bottom'
        );
        return;
      }
    }
    this.dashboardService
      .addProgramImage(this.addImageForm.value)
      .subscribe((res) => {
        this.addImageForm.controls.image.reset();
        this.addImageForm.controls.name.reset();
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

  async removeImage(image, program, index) {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Are you sure to delete this image?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Yes, delete',
          cssClass: 'danger',
          handler: () => {
            this.dashboardService.removeProgramImage(image).subscribe((_) => {
              program.images.splice(index, 1);
              this.inAppMessageService.simpleToast('Removed.', 'bottom');
            });
          },
        },
      ],
    });

    alert.present();
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.inAppMessageService.simpleToast('Please fill in all required fields.', 'bottom');
      return;
    }
    const payload = Object.assign({}, this.form.value);
    // console.log(this.descriptionEditor.root.innerHTML.trim());
    // console.log(this.eligibilityEditor.root.innerHTML.trim());
    // console.log(this.frequencyEditor.root.innerHTML.trim());
    // console.log(this.howToApplyEditor.root.innerHTML.trim());
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
