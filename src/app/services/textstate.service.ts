import { Injectable } from '@angular/core';

@Injectable()
export class TextstateService {

  state;
  constructor() { }

  getChangeState() {
    return this.state;
  }
  setChangeState(value) {
    console.log(value);
    this.state = value;
  }

}
