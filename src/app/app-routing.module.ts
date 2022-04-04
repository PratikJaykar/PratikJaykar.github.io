import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Frontend/login/login.component';
import { SuperAdminComponent } from './Frontend/super-admin/super-admin.component';
import { SideNavComponent } from './Frontend/side-nav/side-nav.component';
import { StationeryRequestComponent } from './Frontend/stationery-request/stationery-request.component';
import { HomeComponent } from './Frontend/home/home/home.component';
import { LoginLayoutComponent } from './Frontend/layout/login-layout/login-layout.component';
import { HomeLayoutComponent } from './Frontend/layout/home-layout/home-layout.component';
import { AuthGuardGuard } from './service/auth-guard.guard';

const routes: Routes = [
  // { path: "", component: LoginComponent, canActivate: [AuthGuardGuard]},

  // {
  //   path: '',
  //   component: HomeLayoutComponent,
  //   canActivate: [AuthGuardGuard],
  //   children: [
  //     {
  //       path: '',
  //       component: HomeComponent
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   component: LoginLayoutComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     }
  //   ]
  // },

  { path: "login", component: LoginComponent},
  { path: "side-nav", component: SideNavComponent},
  { path: "super-admin", component: SuperAdminComponent},
  { path: "staionery-request", component: StationeryRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
