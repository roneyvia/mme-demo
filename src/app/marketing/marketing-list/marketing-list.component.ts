import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../services/http/http.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'marketing-list',
  templateUrl: './marketing-list.component.html',
  styleUrls: ['./marketing-list.component.css']
})
export class MarketingListComponent implements OnInit {
  gridData: any;
  metaData: any;
  constructor(private service: HttpService) {
  }
  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    const entries = { 'eventContext': { 'contextMap': { 'entries': [{ 'key': 'hierarchyName', 'value': 'LeadCampaignHierarchy' }, { 'key': 'levelName', 'value': 'ListDashboard' }, { 'key': 'userAuthenticationDetails', 'value': { 'loggedInUserDetails': [{ 'key': 'userRootClientPartyId', 'value': '1' }, { 'key': 'userParentPartyId', 'value': 'null' }, { 'key': 'userSubjectPartyId', 'value': '501' }, { 'key': 'userContactId', 'value': '1001' }, { 'key': 'userLoginSessionId', 'value': '52271' }, { 'key': 'userUniqueSessionId', 'value': '2' }, { 'key': 'userRootClientPartyName', 'value': 'Demo Client' }, { 'key': 'userEmailId', 'value': 'CRMUser1@benefitalign.com' }] } }, { 'key': 'offset', 'value': 0 }] } }, 'actions': [], 'source': 'leadCampaign', 'name': 'listDashboardPage', 'asynchronous': 'false' };

    this.service.postHttp(entries)
      .subscribe(response => {
        const res = response.json();
        console.log(res);
        this.metaData = res.contextMap.entries[2].value.columnDefs;
        this.gridData = res.contextMap.entries[0].value;
      });

    this.service.getHttp()
      .subscribe(response => {
        const res2 = response.json();
        console.log('====', res2);
      });
  }
}

