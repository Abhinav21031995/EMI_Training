import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginsService } from './logins.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  route: any;
  constructor(private roter:Router,private service:LoginsService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.service.isAdmin)
      {
        return true;
      }
      else if(this.service.isUser){
        return true;
      }
      else{
        this.route.navigate(['']);
        return false;
      }
      }
      
  }
  

