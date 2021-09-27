import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserRole } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  userProfiles$: Observable<any>;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    if (this.authService.userRole === UserRole.superAdmin) {
      this.userProfiles$ = this.authService.getAllUsersBySuperUser();
    }

    if (this.authService.userRole === UserRole.neighbourhoodAdmin) {
      this.userProfiles$ = this.authService.getUsersByNeighbourhood();
    }
  }
}
