import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService, UserRole } from './core/services/auth.service';

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

  isAuth = false;
  userProfile$ = this.authService.userProfile$;

  constructor(
    public authService: AuthService,
    private navController: NavController
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
        this.buildMenu();
      }
    });
  }

  buildMenu() {
    this.menu = [];
    this.submenu = [];

    switch (this.authService.userRole) {
      case UserRole.superAdmin:
        // neighbourhoods
        // organizations
        // programs
        // languages
        // focuses
        // population_groups
        break;

      case UserRole.neighbourhoodAdmin:
        this.menu.push({
          title: 'Organizations',
          url: '/organizations',
          icon: 'paper-plane',
        });
        this.menu.push({
          title: 'Programs',
          url: '/programs',
          icon: 'paper-plane',
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
        this.menu.push({
          title: 'Organization',
          url:
            '/organizations/' +
            this.authService.userProfile$.getValue().profile.organization.id,
          icon: 'paper-plane',
        });
        this.menu.push({
          title: 'Programs',
          url: '/programs',
          icon: 'paper-plane',
        });
        this.submenu.push({
          title: 'User Profile',
          url: '/user-profile',
          icon: 'person-circle',
        });
        break;
    }
  }

  logout() {
    this.authService.logout();
  }
}
