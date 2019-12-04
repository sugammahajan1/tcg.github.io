import { AdminService } from 'src/app/services/admin/admin.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';
import { SweetAlertResult } from 'sweetalert2';
import { MessagingService } from 'src/app/services/messaging/messaging.service';
import { ActivatedRouteSnapshot,Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { headerRoutes } from 'src/app/shared/routes';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() collapseSideNav = new EventEmitter();
  show: boolean = false;
  user: any;
  pageTitle = 'Dashboard';
  routerSubscription: Subscription;
  routes : Array<any>;

  constructor(
    private admin: AdminService,
    private message: MessagingService,
    private router: Router
    ) {
      this.routes = headerRoutes;
     }

  ngOnInit() {
    if (!!this.admin.currentUserValue) this.user = this.admin.currentUserValue;
    console.log(this.user);
    this.subscribeRoute();
    $(document).on('click','.kt-menu__item--submenu',function(e){
      $(this).toggleClass('kt-menu__item--open-dropdown').toggleClass('kt-menu__item--hover');
    })
    
  }

  /********* Toggle side-nav **********/
  sideNav() {
    this.show = !this.show;
    this.collapseSideNav.emit(this.show);
  }

  /********* Toggle side-nav resizing browser window **********/
  @HostListener("window:resize", ["$event"])
  onResize() {
    if (window.innerWidth <= 768) this.show = true;
    else if (window.innerWidth > 768) this.show = false;
    this.collapseSideNav.emit(this.show);
  }

  subscribeRoute(){
    this.routerSubscription = this.admin.currentRoute()
      .subscribe((route: ActivatedRouteSnapshot) => {
        this.pageTitle = route.data['text'];
      });
  }

    /********* User Sign-Out **********/
    signOut() {
      this.message.confirm('logout')
        .then((result: SweetAlertResult) => {
          if (result.value) {
            this.admin.logout();
            this.message.toast('success', 'Successfully logged out');
          }
        });
    }

    navigateTo(path) {
      this.router.navigate([`./${path}`]);
    }

    ngOnDestroy() {
    /********* unsubscribe route subscription **********/
    this.routerSubscription.unsubscribe();
  }

}
