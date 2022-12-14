import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from './service/userservice.service';

@Injectable({
  providedIn: 'root',
})
export class ScanTokenGuard implements CanActivate {
  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      //this.router.canceledNavigationResolution = 'computed';
      return true;
    }
  }
}
