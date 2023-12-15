import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiPath = 'http://localhost:9090';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

  public login(loginData:any) {
    return this.httpClient.post(this.apiPath + '/authenticate', loginData,
      {
        headers: this.requestHeader,
      });
  }
  public forUser() {
    return this.httpClient.get(this.apiPath + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpClient.get(this.apiPath + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles:any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

if (userRoles != null && userRoles) {
    for (let i = 0; i < userRoles.length; i++) {
      for (let j = 0; j < allowedRoles.length; j++) {
        if (userRoles[i].roleName === allowedRoles[j]) {
          // If there is a match, return true immediately
          return true;
        }
      }
    }
  }
  // If no match is found, return false
  return false;
  }
}

