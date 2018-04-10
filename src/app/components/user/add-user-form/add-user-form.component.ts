import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GetDataService } from '../../../services/get-data.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {

  userForm: FormGroup;
  constructor(private dataService: GetDataService) {
  }
  ngOnInit() {
    this.userForm = new FormGroup({
      'name': new FormControl(),
      'username': new FormControl(),
      'email': new FormControl()
    });
  }

  submit() {
    this.dataService.postData(this.userForm.value).subscribe(data => {
      console.log(data);
    });
  }

  reset() {
    this.userForm.reset();
  }

}
