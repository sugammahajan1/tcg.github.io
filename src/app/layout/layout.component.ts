import { AdminService } from './../services/admin/admin.service';
import {
  Component,
  OnInit,
  HostListener
} from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  show: boolean = false;
  stretchNav: boolean = false;
  KTAppOptions = {
    "colors": {
      "state": {
        "brand": "#22b9ff",
        "light": "#ffffff",
        "dark": "#282a3c",
        "primary": "#5867dd",
        "success": "#34bfa3",
        "info": "#36a3f7",
        "warning": "#ffb822",
        "danger": "#fd3995"
      },
      "base": {
        "label": ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
        "shape": ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
      }
    }
  };
  constructor(public router: Router) {
   }  

  ngOnInit() { }

  /********* Shrink top-nav on scroll **********/
  @HostListener("window:scroll", ["$event"])
  onScroll() {
    if (Math.ceil(window.pageYOffset) >= 80) this.stretchNav = true;
    else this.stretchNav = false;
  }

  /********* Toggle side nav **********/
  sideNavDisplay(event) {
    this.show = event;
  }

}