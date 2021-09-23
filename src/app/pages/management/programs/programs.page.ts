import { Component, OnInit } from '@angular/core';
import { AlertOptions } from '@ionic/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.page.html',
  styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {
  programs$: Observable<any>;
  programs: Array<any>;
  oriPrograms: Array<any>;
  filterInput: string;
  selectedOrganization;
  userRole: UserRole;
  availableOrganizations: Array<any>;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private appService: AppService
  ) {}

  ngOnInit() {}

  getOrganizationSelections(neighbourhoodId) {
    this.availableOrganizations = this.appService.appData.Organization.filter(
      (item) => item.neighbourhood === +neighbourhoodId
    );
  }

  onFilter(event) {
    const inputValue = event.target.value;
    this.programs = this.oriPrograms.filter((program) => {
      if (+this.selectedOrganization) {
        return (
          program.name
            .toLowerCase()
            .indexOf(inputValue.trim().toLowerCase()) !== -1 &&
          program.organization?.id === +this.selectedOrganization
        );
      } else {
        return (
          program.name
            .toLowerCase()
            .indexOf(inputValue.trim().toLowerCase()) !== -1
        );
      }
    });
  }

  onSelect(event) {
    const inputValue = event.target.value;
    this.programs = this.oriPrograms.filter((program) => {
      if (this.filterInput && this.filterInput.trim()) {
        return (
          program.name
            .toLowerCase()
            .indexOf(this.filterInput.trim().toLowerCase()) !== -1 &&
          (program.organization?.id === +inputValue || !+inputValue)
        );
      } else {
        return program.organization?.id === +inputValue || !+inputValue;
      }
    });
  }

  ionViewWillEnter() {
    this.userRole = this.authService.userRole;
    if (this.authService.userRole === UserRole.organizationAdmin) {
      this.dashboardService
        .getProgramsByOrganization(
          this.authService.userProfile$.getValue().profile.organization.id
        )
        .pipe(pluck('results'))
        .subscribe((res) => {
          this.programs = res;
          this.oriPrograms = res;
        });
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      const neighbourhoodId =
        this.authService.userProfile$.getValue().profile.neighbourhood.id;
      this.getOrganizationSelections(neighbourhoodId);
      this.dashboardService
        .getProgramsByNeighbourhood(neighbourhoodId)
        .pipe(pluck('results'))
        .subscribe((res) => {
          this.programs = res;
          this.oriPrograms = res;
        });
    }
  }
}
