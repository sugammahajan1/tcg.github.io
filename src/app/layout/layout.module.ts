/******************** imports ********************/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout.routing';
import { MatMenuModule } from '@angular/material/menu';
import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SpinnerModule } from 'primeng/spinner';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

/******************** declarations ********************/
import { LayoutComponent } from './layout.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HorizontalBarComponent } from '../shared/charts/horizontal-bar/horizontal-bar.component';
import { LineChartComponent } from '../shared/charts/line-chart/line-chart.component';
import { DonutChartComponent } from '../shared/charts/donut-chart/donut-chart.component';
import { PostComponent } from './pages/post/post.component';
import { AddNewPostComponent } from './pages/add-new-post/add-new-post.component';
import { ChatComponent } from './pages/chat/chat.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CartComponent } from './pages/cart/cart.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupMemberComponent } from './pages/groups/group-member/group-member.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CommunityComponent } from './pages/community/community.component';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';
import { OrderPlacedComponent } from './pages/order-placed/order-placed.component';
import { DataTableModule } from 'angular7-data-table';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    LayoutComponent,
    TopNavComponent,
    SideNavComponent,
    HorizontalBarComponent,
    LineChartComponent,
    DonutChartComponent,
    PostComponent,
    AddNewPostComponent,
    ChatComponent,
    OrdersComponent,
    CartComponent,
    GroupsComponent,
    GroupMemberComponent,
    CategoriesComponent,
    CommunityComponent,
    OrderReceivedComponent,
    OrderPlacedComponent,
    MyProfileComponent
  ],
  imports: [
    LightboxModule,
    CommonModule,
    LayoutRoutingModule,
    MatMenuModule,
    BreadcrumbsModule.forRoot(),
    ReactiveFormsModule,
    PaginatorModule,
    KeyFilterModule,
    InputSwitchModule,
    SpinnerModule,
    PopoverModule.forRoot(),
    NgbModule,
    ChartsModule,
    BsDatepickerModule.forRoot(),
    NgxPaginationModule,
    AngularMultiSelectModule,
    FormsModule,
    ClickOutsideModule,
    DataTableModule.forRoot()
  ]
})
export class LayoutModule { }
