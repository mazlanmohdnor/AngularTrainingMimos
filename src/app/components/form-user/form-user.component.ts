import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  person: Person = new Person();
  personForm: FormGroup;
  isValid;
  constructor() {
    this.personForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'age': new FormControl(),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.personForm.valid) {
      console.log(this.personForm.value);
      this.isValid = this.personForm.controls.name.invalid;
    } else {
      alert('Form is invalid');
    }
  }

  onReset() {
    this.personForm.reset();
  }


}
