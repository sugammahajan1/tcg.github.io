import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-member',
  templateUrl: './group-member.component.html',
  styleUrls: ['./group-member.component.scss']
})
export class GroupMemberComponent implements OnInit {
  members = [
    {name:'Everyone',_id:'1234567890'},
    {name:'Sugam',_id:'1234567890'},
    {name:'Sukhdeep',_id:'1234567890'},
    {name:'Sumandeep',_id:'1234567890'},
    {name:'Satish',_id:'1234567890'},
    {name:'Ram',_id:'1234567890'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
