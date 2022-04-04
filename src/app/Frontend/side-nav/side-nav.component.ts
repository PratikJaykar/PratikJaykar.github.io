import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout(){
    this.authService.logout();                      
  }

}
