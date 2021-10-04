import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
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
  availableNeighbourhoods: Array<any>;
  selectedNeighbourhoodId;
  filterInput: string;
  showNeighbourhoodName = false;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {}

  onFilter(event) {
    const inputValue = event.target.value;
    this.organizations = this.oriOrganizations.filter((organization) => {
      let inputFilter = true;
      let neighbourhoodFilter = true;

      inputFilter =
        organization.name.toLowerCase().indexOf(inputValue.toLowerCase()) !==
        -1;

      if (+this.selectedNeighbourhoodId) {
        neighbourhoodFilter =
          organization.neighbourhood.id === this.selectedNeighbourhoodId;
      }

      return inputFilter && neighbourhoodFilter;
    });
  }

  onNeighbourhoodSelect(event) {
    const selectedId = +event.target.value;
    this.organizations = this.oriOrganizations.filter((organization) => {
      let inputFilter = true;
      let neighbourhoodFilter = true;
      if (this.filterInput) {
        inputFilter =
          organization.name
            .toLowerCase()
            .indexOf(this.filterInput.trim().toLowerCase()) !== -1;
      }

      if (selectedId) {
        neighbourhoodFilter = organization.neighbourhood.id === selectedId;
      }

      return inputFilter && neighbourhoodFilter;
    });
  }

  ionViewWillEnter() {
    if (this.authService.userRole === UserRole.superAdmin) {
      this.showNeighbourhoodName = true;
      this.dashboardService
        .getAllNeighbourhoods()
        .pipe(
          switchMap((neighbourhoods) => {
            this.availableNeighbourhoods = neighbourhoods;
            return this.dashboardService.getAllOrganizations();
          })
        )
        .subscribe((res) => {
          res.map(
            (item) =>
              (item.neighbourhood = this.availableNeighbourhoods.find(
                (neighbourhood) => neighbourhood.id === item.neighbourhood
              ))
          );
          this.organizations = res;
          this.oriOrganizations = res;
        });
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.dashboardService
        .getOrganizationsByNeighbourhoodId(
          this.authService.userProfile$.getValue().profile.neighbourhood.id
        )
        .subscribe((res) => {
          this.organizations = res;
          this.oriOrganizations = res;
        });
    }
  }
}
