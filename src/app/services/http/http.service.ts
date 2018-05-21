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
    this.token = 'CRMUser1@benefitalign.com:1525946618525:501:1:52271:CRMUser:CRMUser:0a804cdcde32cc3d59b4ab96bb9daf69:BenefitAlign:1001:2:null:CRM User1';
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
