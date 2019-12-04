import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from '../../services/admin/admin.service';
import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { sideRoutes } from '../../shared/routes';
import { SweetAlertResult } from 'sweetalert2';
import { MessagingService } from 'src/app/services/messaging/messaging.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() show: boolean;
  currentPath: string;
  routes: Array<any> = [];
  permissions: Array<string> = [];

  constructor(private admin: AdminService,
    private message: MessagingService,
    private router: Router) {
    
    this.routes = sideRoutes;  


  }
  mouseEnter() {
    $('body').removeClass('kt-aside--minimize',3000)
  }
  mouseLeave() {
    $('body').addClass('kt-aside--minimize',3000)

  }
  ngOnInit() {
    
  $(document).on("click", ".kt-menu__item--submenu", function() {
  $(this).toggleClass('kt-menu__item--open');
  });
   }

   routeTo(path) {
    this.router.navigate([`./${path}`])
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
  

}
