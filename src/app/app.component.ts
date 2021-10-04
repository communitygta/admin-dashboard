import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService, UserRole } from './core/services/auth.service';
import { DashboardService } from './core/services/dashboard.service';

export interface Menu {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public menu: Array<Menu> = [];
  public submenu: Array<Menu> = [];

  organization;
  neighbourhood;

  isAuth = false;
  userProfile$ = this.authService.userProfile$;

  constructor(
    public authService: AuthService,
    private navController: NavController,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.authService.isAuth$.subscribe((isAuth) => {
      this.isAuth = isAuth;
      if (!isAuth) {
        this.navController.navigateRoot('signin');
      }
    });
    this.authService.userProfile$.subscribe((userProfile) => {
      if (userProfile) {
        this.buildMenu(userProfile);
      }
    });
  }

  buildMenu(userProfile) {
    this.menu = [];
    this.submenu = [];

    switch (this.authService.userRole) {
      case UserRole.superAdmin:
        this.menu.push({
          title: 'Neighbourhoods',
          url: '/neighbourhoods',
          icon: 'business',
        });
        this.menu.push({
          title: 'Organizations',
          url: '/organizations',
          icon: 'cube',
        });
        this.menu.push({
          title: 'Programs',
          url: '/programs',
          icon: 'diamond',
        });
        this.menu.push({
          title: 'Languages',
          url: '/languages',
          icon: 'globe',
        });
        this.menu.push({
          title: 'Focuses',
          url: '/focuses',
          icon: 'bulb',
        });
        this.menu.push({
          title: 'Population Groups',
          url: '/population-groups',
          icon: 'accessibility',
        });
        this.submenu.push({
          title: 'All Admins',
          url: '/user-list',
          icon: 'people',
        });
        this.submenu.push({
          title: 'Action logs',
          url: '/actionlogs',
          icon: 'reader',
        });
        this.submenu.push({
          title: 'My Profile',
          url: '/user-profile',
          icon: 'person-circle',
        });
        break;

      case UserRole.neighbourhoodAdmin:
        this.neighbourhood = userProfile.profile.neighbourhood;
        this.organization = null;

        this.menu.push({
          title: 'Organizations',
          url: '/organizations',
          icon: 'cube',
        });
        this.menu.push({
          title: 'Programs',
          url: '/programs',
          icon: 'diamond',
        });
        this.submenu.push({
          title: 'Organization Admins',
          url: '/user-list',
          icon: 'people',
        });
        this.submenu.push({
          title: 'User Profile',
          url: '/user-profile',
          icon: 'person-circle',
        });
        break;

      case UserRole.organizationAdmin:
        this.neighbourhood = null;
        this.organization = userProfile.profile.organization;
        this.dashboardService
          .getNeighbourhood(this.organization.neighbourhood)
          .subscribe((res) => (this.neighbourhood = res));

        this.menu.push({
          title: 'Organization',
          url:
            '/organizations/' +
            this.authService.userProfile$.getValue().profile.organization.id,
          icon: 'cube',
        });
        this.menu.push({
          title: 'Programs',
          url: '/programs',
          icon: 'diamond',
        });
        this.submenu.push({
          title: 'My Profile',
          url: '/user-profile',
          icon: 'person-circle',
        });
        break;
    }
  }

  logout() {
    this.authService.logout().subscribe();
  }
}
