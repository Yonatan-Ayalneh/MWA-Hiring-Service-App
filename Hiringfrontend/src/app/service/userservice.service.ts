import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Interface/User';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  loggedIn: boolean = false;

  userState$ = new BehaviorSubject<{ token: string }>({ token: '' });

  constructor(private http: HttpClient) {}

  signupUser(userData: any) {
    return this.http.post('http://localhost:3000/users/signup', userData);
  }

  payMoney(userData: any) {
    return this.http.post('http://localhost:3000/job-history', userData);
  }

  login(userData: any) {
    return this.http.post('http://localhost:3000/users/login', userData);
  }

  getUserState(): User | null {
    if (this.userState$.value.token) {
      const { user }: any = jwt_decode(this.userState$.value.token);
      return user as User;
    } else {
      return null;
    }
  }

  persistState() {
    localStorage.setItem('userState', JSON.stringify(this.userState$.value));
  }

  refreshState() {
    const userState = localStorage.getItem('userState');
    if (userState) {
      this.userState$.next(JSON.parse(userState));
    }
  }

  isLoggedIn(): boolean {
    const c = localStorage.getItem('userState');
    if (c) this.loggedIn = true;
    else this.loggedIn = false;
    return this.loggedIn;
  }
}
