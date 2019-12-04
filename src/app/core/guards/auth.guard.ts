import { Injectable } from '@angular/core';
import { AdminService } from './../../services/admin/admin.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { MessagingService } from 'src/app/services/messaging/messaging.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private currentUser: any;

  constructor(
    private admin: AdminService,
    private router: Router,
    private message: MessagingService) { }

  /*************** Layout Routing guard *************/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.admin.userToken) return true;
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    this.message.toast('warning', 'access denied.');
    return false;
  }
}
