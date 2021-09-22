import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppService } from './core/services/app.service';
import { AuthService, UserRole } from './core/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Organizations', url: '/organizations', icon: 'paper-plane' },
    { title: 'Organization', url: '/organization', icon: 'paper-plane' },
    { title: 'Programs', url: '/programs', icon: 'mail' },
  ];

  public menu: Array<{ title: string; url: string; icon: string }> = [];

  isAuth = false;
  userProfile$ = this.authService.userProfile$;

  constructor(
    public authService: AuthService,
    private navController: NavController,
  ) {}

  ngOnInit() {
    this.authService.isAuth$.subscribe((isAuth) => {
      this.isAuth = isAuth;
      if (!isAuth) {
        this.navController.navigateRoot('signin');
      }
    });
    this.authService.userProfile$.subscribe(userProfile => {
      if (userProfile) {
        this.buildMenu();
      }
    });
  }

  buildMenu() {
    this.menu = [];
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
        break;

      case UserRole.organizationAdmin:
        this.menu.push({
          title: 'Organization',
          url:
            '/organizations/' +
            this.authService.userProfile$.getValue().profile.organization,
          icon: 'paper-plane',
        });
        this.menu.push({
          title: 'Programs',
          url: '/programs',
          icon: 'paper-plane',
        });
        break;
    }
  }

  logout() {
    this.authService.logout();
  }
}
