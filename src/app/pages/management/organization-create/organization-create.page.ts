/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { InAppMessageService } from 'src/app/core/services/in-app-message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-organization-create',
  templateUrl: './organization-create.page.html',
  styleUrls: ['./organization-create.page.scss'],
})
export class OrganizationCreatePage implements OnInit {
  logoDomain = environment.appUrl;
  form: FormGroup;
  languages: Array<any>;
  neighbourhoods$: Observable<any>;
  defaultNewImageUrl = 'assets/images/add-image.svg';
  newImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.defaultNewImageUrl
  );
  neighbourhoodId;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private inAppMessageService: InAppMessageService,
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private navController: NavController
  ) {}

  ngOnInit() {
    if (this.authService.userRole === UserRole.superAdmin) {
      this.neighbourhoods$ = this.dashboardService.getAllNeighbourhoods();
    }
    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.neighbourhoodId = this.authService.userProfile$.getValue().profile.neighbourhood.id;
    }
    this.dashboardService.getAllLanguages().subscribe(res => this.languages = res);
    this.initForm();
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
      name: [null, [Validators.required]],
      neighbourhood: [this.neighbourhoodId, [Validators.required]],
      part_time_staff: [null],
      phone: [null],
      postal_code: [null],
      profile_code: [null],
      video_links: [null],
      view_count: [0],
      website: [null],
    });
  }

  toggleLanguage(language) {
    this.form.markAsDirty();
    language.selected = !language.selected;
  }

  create() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.inAppMessageService.simpleToast('Please fill in all required fields.', 'bottom');
      return;
    }
    const payload = Object.assign({}, this.form.value);
    delete payload.logo;
    const selectedLanguages = this.languages.filter(
      (language) => language.selected
    );
    payload.languages = selectedLanguages;
    this.dashboardService.createOrganization(payload).subscribe((res) => {
      this.inAppMessageService.simpleAlert(
        'Message',
        'Organization has been created.',
        'OK',
        false,
        () => this.navController.navigateRoot(`organization-edit/${res.id}`)
      );
    });
  }
}
