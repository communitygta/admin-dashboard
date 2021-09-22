import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  pluck,
  switchMap,
} from 'rxjs/operators';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.page.html',
  styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {
  programs$: Observable<any>;
  programs;
  oriPrograms;
  filterInput;

  constructor(
    private authService: AuthService,
    private dashboardService: DashboardService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  onFilter(event) {
    const inputValue = event.target.value;
    this.programs = this.oriPrograms.filter(
      (program) =>program.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
    );
  }

  ionViewWillEnter() {
    if (this.authService.userRole === UserRole.organizationAdmin) {
      this.dashboardService
        .getProgramsByOrganization(
          this.authService.userProfile$.getValue().profile.organization
        )
        .pipe(pluck('results'))
        .subscribe((res) => {
          this.programs = res;
          this.oriPrograms = res;
        });
    }
  }
}
