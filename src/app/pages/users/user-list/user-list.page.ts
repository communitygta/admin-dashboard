import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  userProfiles$: Observable<any>;
  filterInput: string;
  profiles: Array<any>;
  oriProfiles: Array<any>;
  selectedOrganizationId;
  selectedNeighbourhoodId;
  availableOrganizations$: Observable<any>;
  availableNeighbourhoods$: Observable<any>;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.userRole === UserRole.superAdmin) {
      this.availableOrganizations$ =
        this.dashboardService.getAllOrganizations();
      this.availableNeighbourhoods$ =
        this.dashboardService.getAllNeighbourhoods();
      this.authService.getAllUsersBySuperUser().subscribe((res) => {
        this.oriProfiles = res;
        this.profiles = res;
      });
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      const neighbourhoodId = this.authService.userProfile$.getValue().profile.neighbourhood.id;
      this.availableOrganizations$ =
        this.dashboardService.getOrganizationsByNeighbourhoodId(neighbourhoodId);
      this.authService.getUsersByNeighbourhood().subscribe((res) => {
        this.oriProfiles = res;
        this.profiles = res;
      });
    }
  }

  onFilter(event) {
    const inputValue = event.target.value;
    this.profiles = this.oriProfiles.filter((profile) => {
      let inputFilter = true;
      let organizationFilter = true;
      let neighbourhoodFilter = true;

      inputFilter =
        profile.user.username
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) !== -1;

      if (+this.selectedOrganizationId) {
        organizationFilter =
          profile.organization?.id === this.selectedOrganizationId;
      }

      if (+this.selectedNeighbourhoodId) {
        neighbourhoodFilter =
          profile.neighbourhood?.id === this.selectedNeighbourhoodId;
      }

      return inputFilter && organizationFilter && neighbourhoodFilter;
    });
  }

  onOrganizationSelect(event) {
    const selectedId = +event.target.value;
    this.profiles = this.oriProfiles.filter((profile) => {
      let inputFilter = true;
      let organizationFilter = true;
      let neighbourhoodFilter = true;
      if (this.filterInput) {
        inputFilter =
          profile.user.username
            .toLowerCase()
            .indexOf(this.filterInput.trim().toLowerCase()) !== -1;
      }

      if (selectedId) {
        organizationFilter = profile.organization?.id === selectedId;
      }

      if (+this.selectedNeighbourhoodId) {
        neighbourhoodFilter =
          profile.neighbourhood?.id === this.selectedNeighbourhoodId;
      }

      return inputFilter && organizationFilter && neighbourhoodFilter;
    });
  }

  onNeighbourhoodSelect(event) {
    const selectedId = +event.target.value;
    this.profiles = this.oriProfiles.filter((profile) => {
      let inputFilter = true;
      let organizationFilter = true;
      let neighbourhoodFilter = true;
      if (this.filterInput) {
        inputFilter =
          profile.user.username
            .toLowerCase()
            .indexOf(this.filterInput.trim().toLowerCase()) !== -1;
      }

      if (selectedId) {
        neighbourhoodFilter = profile.neighbourhood?.id === selectedId;
      }

      if (+this.selectedOrganizationId) {
        organizationFilter =
          profile.organization?.id === this.selectedOrganizationId;
      }

      return inputFilter && organizationFilter && neighbourhoodFilter;
    });
  }
}
