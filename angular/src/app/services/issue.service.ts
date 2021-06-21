import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class IssueService {

  constructor(private http: HttpClient) { }

  getTags() {
    return this.http.get('http://84.252.128.7:4000/v1/clickup/tags');
  }

  createIssue(body) {
    return this.http.post('http://84.252.128.7:4000/v1/clickup/issues', body,);
  }
}
