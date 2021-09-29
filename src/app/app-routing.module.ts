import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./pages/auth/signin/signin.module').then(
        (m) => m.SigninPageModule
      ),
  },
  {
    path: 'organizations/:id',
    loadChildren: () =>
      import('./pages/management/organization/organization.module').then(
        (m) => m.OrganizationPageModule
      ),
  },
  {
    path: 'organizations',
    loadChildren: () =>
      import('./pages/management/organizations/organizations.module').then(
        (m) => m.OrganizationsPageModule
      ),
  },
  {
    path: 'programs/:id',
    loadChildren: () =>
      import('./pages/management/program/program.module').then(
        (m) => m.ProgramPageModule
      ),
  },
  {
    path: 'programs',
    loadChildren: () =>
      import('./pages/management/programs/programs.module').then(
        (m) => m.ProgramsPageModule
      ),
  },
  {
    path: 'program-edit/:id',
    loadChildren: () =>
      import('./pages/management/program-edit/program-edit.module').then(
        (m) => m.ProgramEditPageModule
      ),
  },
  {
    path: 'organization-edit/:id',
    loadChildren: () =>
      import(
        './pages/management/organization-edit/organization-edit.module'
      ).then((m) => m.OrganizationEditPageModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'program-create',
    loadChildren: () =>
      import('./pages/management/program-create/program-create.module').then(
        (m) => m.ProgramCreatePageModule
      ),
  },
  {
    path: 'organization-create',
    loadChildren: () =>
      import(
        './pages/management/organization-create/organization-create.module'
      ).then((m) => m.OrganizationCreatePageModule),
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/users/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/users/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'user-edit/:id',
    loadChildren: () => import('./pages/users/user-edit/user-edit.module').then( m => m.UserEditPageModule)
  },
  {
    path: 'user-create',
    loadChildren: () => import('./pages/users/user-create/user-create.module').then( m => m.UserCreatePageModule)
  },
  {
    path: 'neighbourhoods',
    loadChildren: () => import('./pages/management/neighbourhoods/neighbourhoods.module').then( m => m.NeighbourhoodsPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/management/languages/languages.module').then( m => m.LanguagesPageModule)
  },
  {
    path: 'population-groups',
    loadChildren: () => import('./pages/management/population-groups/population-groups.module').then( m => m.PopulationGroupsPageModule)
  },
  {
    path: 'focuses',
    loadChildren: () => import('./pages/management/focuses/focuses.module').then( m => m.FocusesPageModule)
  },
  {
    path: 'actionlogs',
    loadChildren: () => import('./pages/users/actionlogs/actionlogs.module').then( m => m.ActionlogsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
