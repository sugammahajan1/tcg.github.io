import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  postsData: Array<any> = [
    {
      name:'Ac',
      postImage:{
        main:{
          original:'',
          thumbnail:'',
        },
        other:[
          {
            original:'',
            thumbnail:''
          },
          {
            original:'',
            thumbnail:''
          },
          {
            original:'',
            thumbnail:''
          },
          {
            original:'',
            thumbnail:''
          }
        ]
      },
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      desc:'a fully packed tv appliance inside a box conataining a mobile as a gift and a voucher worth $1000 packed inside '
    },
    {
      name:'Fridge',
      postImage:{
        main:{
          original:'',
          thumbnail:'',
        },
        other:[
          {
            original:'',
            thumbnail:''
          },
          {
            original:'',
            thumbnail:''
          },
          {
            original:'',
            thumbnail:''
          },
          {
            original:'',
            thumbnail:''
          }
        ]
      },
      shipping:'Home Delivery',
      category:'electic appliances',
      returnOption:true,
      desc:'a fully packed tv appliance inside a box conataining a mobile as a gift and a voucher worth $1000 packed inside '
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
