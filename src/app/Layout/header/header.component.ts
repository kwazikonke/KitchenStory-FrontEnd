import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public loginService: LoginService
  ) {}
  ngOnInit(): void { }
  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }
  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }
}
