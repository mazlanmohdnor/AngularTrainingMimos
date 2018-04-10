import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  persons: any[];
  element = false;
  date = new Date();
  text: String;

  constructor() {
    this.persons = [
      { name: 'name1', age: 20 },
      { name: 'name2', age: 20 },
      { name: 'name3', age: 20 },
      { name: 'name4', age: 20 }
    ];
  }


  ngOnInit() {
    this.setText();
  }

  toggleElement() {
    this.element = !this.element;
  }

  setText() {
    // tslint:disable-next-line:max-line-length
    this.text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, fugit fugiat nihil iste quam quia nesciunt, sunt voluptatum delectus sequi unde commodi, libero sint ullam sit obcaecati ex suscipit et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque aperiam ipsam ea? Itaque commodi animi, excepturi id ratione dignissimos eveniet impedit rerum doloremque culpa minima, iure nam tempora ipsa.';
  }


}
