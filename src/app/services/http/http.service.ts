import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class HttpService {

  private url = 'http://localhost:8080/ui/rest/users/businessEvent';
  private url_metadata = 'http://localhost:3000/mme/';
  token: string;
  headers: any;
  options: any;

  constructor(private http: Http) {
    // tslint:disable-next-line:max-line-length
    this.token = 'Dexter.Antony@benefitalign.com:1527252895752:96:21:18738:CRMUser:CRMUser:e4c2d88b11e97e78ad9a0a2bcd9c7eae:TrueCoverage Test:173:1:96:Dexter Antony:truecoverage-test';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json;charset=UTF-8');
    this.headers.append('X-Auth-Token', this.token);
    this.options = new RequestOptions({ headers: this.headers });
  }

  postHttp(entries) {
    return this.http.post(this.url, JSON.stringify(entries), this.options);
  }

  getHttp() {
    return this.http.get(this.url_metadata + '1450');
  }
}
