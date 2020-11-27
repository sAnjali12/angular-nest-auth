import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Router } from '@angular/router'
import { map, catchError } from 'rxjs/operators';


export interface Logindata {
  username: string
  password: string
}

@Injectable()
export class AuthService {

  private USERNAME_KEY: string = "username";
  private PASSWORD_KEY: string = "password";

constructor(private http:HttpClient,
            private router: Router) {

}

  async login(username: string, password: string) : Promise<boolean>{
    try {
    
      await localStorage.setItem(this.USERNAME_KEY, username);
      await localStorage.setItem(this.PASSWORD_KEY, password);
      return true;
    
    } catch(e) {
      console.log("Error while saving usernamd and password to localstorage: ", e);
      return false;
    } 

  }

  public async getAuthHeaders(): Promise<any>{
    const {username, password} = await this.getAuthFromLocalStorage();
    let basicString = 'Basic ' + btoa(username + ':' + password);
    return basicString
  }

  /**
   * @summary Function to check whether the user is logged in or not.
   */
  public async isLoggedIn(): Promise<boolean> {
  
    const {username, password} = await this.getAuthFromLocalStorage();
    if(!username || !password) {
      return false;
    }

    return true;
  }

  private async getAuthFromLocalStorage(): Promise<{
    username?: any;
    password?: any;
  }> {
    const username = localStorage.getItem(this.USERNAME_KEY);
    const password = localStorage.getItem(this.PASSWORD_KEY);
    return {
      username,
      password
    };
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
}
  
// logout() {
// // remove user from local storage to log user out
// localStorage.removeItem('currentUser');
// }


}