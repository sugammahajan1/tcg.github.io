import { AdminService } from './../../services/admin/admin.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExternalGuard implements CanActivate {

  constructor(private admin: AdminService) { }

  /*************** External Routing guard *************/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.admin.userToken) return true;
    this.admin.toHome();
    return false;
  }
}
