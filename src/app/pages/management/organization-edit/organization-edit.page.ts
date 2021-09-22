/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.page.html',
  styleUrls: ['./organization-edit.page.scss'],
})
export class OrganizationEditPage implements OnInit {
  logoDomain = environment.appUrl;
  form: FormGroup;
  addVideoLinkForm: FormGroup;
  addImageForm: FormGroup;
  languages = this.appService.appData.Language;
  defaultNewImageUrl = 'assets/images/add-image.svg';
  newImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultNewImageUrl);
  organization$ = this.dashboardService
    .getOrganizationById(this.activatedRoute.snapshot.params.id)
    .pipe(
      tap((res) => {
        this.languages.map((language) => {
          language.selected = !!res.languages.find(
            (item) => item.id === language.id
          );
          return language;
        });
        this.form.patchValue(res);
        this.initAddVideoLinkForm();
        this.initAddImageForm();
      })
    );

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private inAppMessageService: InAppMessageService,
    private appService: AppService,
    private sanitizer: DomSanitizer,
  ) {
    this.initForm();
  }

  ngOnInit() {}

  get logo() {
    return this.form.controls.logo;
  }

  initForm() {
    this.form = this.fb.group({
      address: [null],
      charity_number: [null],
      email: [null],
      founded: [null],
      full_time_staff: [null],
      id: [null],
      images: [null],
      languages: [null],
      logo: [null],
      mission: [null],
      name: [null],
      neighbourhood: this.fb.group({
        id: [null],
        name: [null],
        total_population: [null],
      }),
      part_time_staff: [null],
      phone: [null],
      postal_code: [null],
      profile_code: [null],
      video_links: [null],
      view_count: [null],
      website: [null],
    });
  }

  initAddVideoLinkForm() {
    this.addVideoLinkForm = this.fb.group({
      name: [null, [Validators.required]],
      link: [null, [Validators.required]],
      organization: [this.form.get('id').value],
    });
  }

  initAddImageForm() {
    this.addImageForm = this.fb.group({
      name: [null, [Validators.required]],
      image: [null, [Validators.required]],
      organization: [this.form.get('id').value],
    });
  }

  removeVideoLink(videoLink, organization, index) {
    this.dashboardService.removeOrganiztionVideoLink(videoLink).subscribe(_ => {
      organization.video_links.splice(index, 1);
    });
  }

  addVideoLink(organization) {
    if (this.addVideoLinkForm.invalid) {
      return;
    }
    this.dashboardService
      .addOrganizationVideoLink(this.addVideoLinkForm.value)
      .subscribe((res) => {
        this.addVideoLinkForm.reset();
        this.inAppMessageService.simpleToast(
          'A new video link has been added.',
          'bottom'
        );
        organization.video_links.push(res);
      });
  }

  toggleLanguage(language) {
    this.form.markAsDirty();
    language.selected = !language.selected;
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.updateLogo(this.form.get('id').value, file);
    }
  }

  newImageOnChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
      this.addImageForm.get('image').setValue(file);
    }
  }

  addNewImage(organization) {
    if (this.addImageForm.invalid) {
      return;
    }
    this.dashboardService
      .addOrganizationImage(this.addImageForm.value)
      .subscribe((res) => {
        this.addImageForm.reset();
        this.inAppMessageService.simpleToast(
          'A new image has been added.',
          'bottom'
        );
        const image = Object.assign({}, res);
        image.image = this.logoDomain + res.image;
        organization.images.push(image);
        this.newImageUrl = this.defaultNewImageUrl;
      });
  }

  removeImage(image, organization, index) {
    this.dashboardService.removeOrganizationImage(image).subscribe(_ => {
      organization.images.splice(index, 1);
      this.inAppMessageService.simpleToast(
        'Removed.',
        'bottom'
      );
    });
  }

  updateLogo(id, logo) {
    const payload = {
      id,
      logo,
    };
    this.dashboardService.updateOrganizationLogo(payload).subscribe((res) => {
      this.logo.patchValue(this.logoDomain + res.logo);
      this.inAppMessageService.simpleAlert(
        'Message',
        'Organization logo has been updated.'
      );
    });
  }

  save() {
    const payload = Object.assign({}, this.form.value);
    delete payload.logo;
    delete payload.neighbourhood;
    const selectedLanguages = this.languages.filter(
      (language) => language.selected
    );
    payload.languages = selectedLanguages;
    this.dashboardService.updateOrganization(payload).subscribe((res) => {
      this.inAppMessageService.simpleAlert(
        'Message',
        'Organization has been updated.'
      );
      this.form.patchValue(res);
      this.form.markAsPristine();
    });
  }
}
