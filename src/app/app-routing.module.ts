import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Frontend/login/login.component';
import { SuperAdminComponent } from './Frontend/super-admin/super-admin.component';
import { SideNavComponent } from './Frontend/side-nav/side-nav.component';

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "side-nav", component: SideNavComponent},
  { path: "super-admin", component: SuperAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
