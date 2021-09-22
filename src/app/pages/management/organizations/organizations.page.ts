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
  organizations;
  oriOrganizations;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {}

  onFilter(event) {
    const inputValue = event.target.value;
    this.organizations = this.oriOrganizations.filter(
      (program) =>
        program.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    );
  }

  ionViewWillEnter() {
    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.dashboardService
        .getOrganizationsByNeighbourhoodId(
          this.authService.userProfile$.getValue().profile.neighbourhood
        )
        .pipe(pluck('results'))
        .subscribe((res) => {
          this.organizations = res;
          this.oriOrganizations = res;
        });
    }
  }
}
