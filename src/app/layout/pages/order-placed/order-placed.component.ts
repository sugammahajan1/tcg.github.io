import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {
  myOrders = [
    {
      name:'Tv',
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      status: 'delivered',
      shippingAddress:'India',
      amount:'100 TGC'
    },
    {
      name:'Tv',
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      status: 'delivered',
      shippingAddress:'India',
      amount:'100 TGC'
    },
    {
      name:'Tv',
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      status: 'delivered',
      shippingAddress:'India',
      amount:'100 TGC'
    },
    {
      name:'Tv',
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      status: 'rejected',
      shippingAddress:'India',
      amount:'100 TGC'
    },
    {
      name:'Tv',
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      status: 'rejected',
      shippingAddress:'India',
      amount:'100 TGC'
    },
    {
      name:'Tv',
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      status: 'delivered',
      shippingAddress:'India',
      amount:'100 TGC'
    },
    {
      name:'Tv',
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      status: 'pending',
      shippingAddress:'India',
      amount:'100 TGC'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
