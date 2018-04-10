import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GetDataService {
  private api = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.api);
  }

  postData(userObj) {
    return this.http.post(`${this.api}`, userObj);
  }


}
