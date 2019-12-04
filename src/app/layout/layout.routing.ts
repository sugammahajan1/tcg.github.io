/********** modules **********/
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

/********** components **********/
import { LayoutComponent } from "./layout.component";
/********** guards **********/
import * as authGuard from './../core/guards/auth.guard';
import { PostComponent } from './pages/post/post.component';
import { AddNewPostComponent } from './pages/add-new-post/add-new-post.component';
import { ChatComponent } from './pages/chat/chat.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CartComponent } from './pages/cart/cart.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CommunityComponent } from './pages/community/community.component';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';
import { OrderPlacedComponent } from './pages/order-placed/order-placed.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },

  {
    path: '', component: LayoutComponent, children: [

      { path: 'posts', component: PostComponent, data: { breadcrumbs: true, text: 'Post' } },
      { path: 'add-post', component: AddNewPostComponent, data: { breadcrumbs: true, text: 'Post' } },
      { path: 'chat', component: ChatComponent, data: { breadcrumbs: true, text: 'chat' } },
      { path: 'order-received', component: OrderReceivedComponent, data: { breadcrumbs: true, text: 'order' } },
      { path: 'order-placed', component: OrderPlacedComponent, data: { breadcrumbs: true, text: 'order' } },
      // { path: 'cart', component: CartComponent, data: { breadcrumbs: true, text: 'cart' } },
      // { path: 'groups', component: GroupsComponent, data: { breadcrumbs: true, text: 'group' } },
      { path: 'categories', component: CategoriesComponent, data: { breadcrumbs: true, text: 'category' } },
      { path: 'community', component: CommunityComponent, data: { breadcrumbs: true, text: 'community' } },
      { path: 'profile', component: MyProfileComponent, data: { breadcrumbs: true, text: 'profile' } },

      // {
      //   path: 'category-management', data: { breadcrumbs: true, text: 'Manage Categories' }, children: [
      //     { path: '', component: CategoryServiceManagementComponent },
      //     { path: 'add', component: AddEditCategoryServiceComponent, data: { breadcrumbs: true, text: 'Add Category' } },
      //     { path: 'edit', component: AddEditCategoryServiceComponent, data: { breadcrumbs: true, text: 'Edit Category' } },

      //     {
      //       path: 'service-management', data: { breadcrumbs: true, text: 'Manage Services' }, children: [
      //         { path: '', component: CategoryServiceManagementComponent },
      //         { path: 'add', component: AddEditCategoryServiceComponent, data: { breadcrumbs: true, text: 'Add Service' } },
      //         { path: 'edit', component: AddEditCategoryServiceComponent, data: { breadcrumbs: true, text: 'Edit Service' } }
      //       ]
      //     },
      //   ]
      // },

      // {
      //   path: 'promotions', data: { breadcrumbs: true, text: 'Promotions' }, children: [
      //     { path: '', component: PromotionComponent },
      //     { path: 'add', component: AddEditPromotionComponent, data: { breadcrumbs: true, text: 'Add Promotion' } },
      //     { path: 'edit', component: AddEditPromotionComponent, data: { breadcrumbs: true, text: 'Edit Promotion' } },
      //     {
      //       path: 'service-management', data: { breadcrumbs: true, text: 'Manage Services' }, children: [
      //         { path: '', component: CategoryServiceManagementComponent },
      //         { path: 'add', component: AddEditCategoryServiceComponent, data: { breadcrumbs: true, text: 'Add Service' } },
      //         { path: 'edit', component: AddEditCategoryServiceComponent, data: { breadcrumbs: true, text: 'Edit Service' } }
      //       ]
      //     },
      //   ]
      // },
      // {
      //   path: 'discounts' , data: { breadcrumbs: true, text: 'Discounts' }, children: [
      //     { path: '', component:DiscountComponent },
      //     { path: 'add', component: AddEditDiscountComponent, data: { breadcrumbs: true, text: 'Add Promotion' } },
      //     { path: 'edit', component: AddEditDiscountComponent, data: { breadcrumbs: true, text: 'Edit Promotion' } },
      //   ]
      // },
      // {
      //   path: 'users' , data: { breadcrumbs: true, text: 'Users' }, children: [
      //     { path: '', component:UserComponent }
      //   ]
      // },
      // {
      //   path: 'stylists' , data: { breadcrumbs: true, text: 'Stylists' }, children: [
      //     { path: '', component:StylistComponent }
      //   ]
      // },
      // {
      //   path: 'bookings' , data: { breadcrumbs: true, text: 'Bookings' }, children: [
      //     { path: '', component:BookingComponent }
      //   ]
      // },
      // {
      //   path: 'posts' , data: { breadcrumbs: true, text: 'Posts' }, children: [
      //     { path: '', component:PostComponent },
      //     { path: 'details', component:PostDetailComponent }
      //   ]
      // },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
