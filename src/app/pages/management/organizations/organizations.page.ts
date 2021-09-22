import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.page.html',
  styleUrls: ['./organizations.page.scss'],
})
export class OrganizationsPage implements OnInit {
  organizations$: Observable<any>;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.organizations$ = this.dashboardService
        .getOrganizationsByNeighbourhoodId(
          this.authService.userProfile$.getValue().profile.neighbourhood
        )
        .pipe(pluck('results'));
    }
  }
}
