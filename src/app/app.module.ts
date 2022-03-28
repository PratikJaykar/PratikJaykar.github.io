import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Frontend/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material';
import { SuperAdminComponent } from './Frontend/super-admin/super-admin.component';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './Frontend/side-nav/side-nav.component';
import { MatToolbarModule, MatMenuModule, MatDividerModule, MatSelectModule  } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuperAdminComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSidenavModule, 
    MatToolbarModule, 
    MatMenuModule, 
    MatDividerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
