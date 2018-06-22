import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component ( {
  selector   : 'pta-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  @Input ()
  userList: User[];
  selectedUsr: User;

  constructor () {
  }

  ngOnInit () {
    console.log ( this.userList );
  }

  setAsSelected ( $event: User ) {
    if ( this.selectedUsr ) {
      this.selectedUsr.color = undefined;
    }

    this.selectedUsr       = $event;
    this.selectedUsr.color = 'red';
  }
}
