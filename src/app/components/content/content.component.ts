import { TextstateService } from './../../services/textstate.service';
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
  isTruncate = true;

  constructor(private textstate: TextstateService) {
    this.persons = [
      { name: 'name1', age: 20 },
      { name: 'name2', age: 20 },
      { name: 'name3', age: 20 },
      { name: 'name4', age: 20 }
    ];
  }

  ngOnChanges() {
    this.isTruncate = this.textstate.getChangeState();
  }
  ngOnInit() {
    this.setText();
    console.log('ngOnInit', this.isTruncate);
  }

  toggleElement() {
    this.element = !this.element;
  }

  setText() {
    // tslint:disable-next-line:max-line-length
    this.text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, fugit fugiat nihil iste quam quia nesciunt, sunt voluptatum delectus sequi unde commodi, libero sint ullam sit obcaecati ex suscipit et?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eaque aperiam ipsam ea? Itaque commodi animi, excepturi id ratione dignissimos eveniet impedit rerum doloremque culpa minima, iure nam tempora ipsa.';
  }

  readmore() {
    this.isTruncate = this.textstate.getChangeState();

  }

  checkState() {
    this.isTruncate = this.textstate.getChangeState();
    console.log('this.isTruncate', this.isTruncate);
  }

}
