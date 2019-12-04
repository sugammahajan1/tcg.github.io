import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  postsData: Array<any> = [
    {
      name:'Tv',
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
