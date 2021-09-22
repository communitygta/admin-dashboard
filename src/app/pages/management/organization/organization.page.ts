import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.page.html',
  styleUrls: ['./organization.page.scss'],
})
export class OrganizationPage implements OnInit {
  organization$: Observable<any>;

  constructor(
    private dashboardService: DashboardService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.organization$ = this.dashboardService.getOrganizationById(
      this.activatedRoute.snapshot.params.id
    );
  }
}
