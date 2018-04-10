import { GetDataService } from './../../../services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: any;
  constructor(private userService: GetDataService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

}
