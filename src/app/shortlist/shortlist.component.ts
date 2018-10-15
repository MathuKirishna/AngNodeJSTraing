import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ShortListService } from '../providers/shortlist.service';
import { DOCUMENT } from '@angular/common';
import { AdvancedSearchService } from '../providers/advancedsearch.service';

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.css']
})
export class ShortlistComponent implements OnInit {
  document: any;
  employees: any[];
  temp_user_id: String;
  constructor(private advancedSearchService: AdvancedSearchService, private route: Router, @Inject(DOCUMENT) document, private router: Router, private shortlistService: ShortListService) {
    this.document = document;
    this.temp_user_id = 'temp_user';
  }

  ngOnInit() {
    this.shortlistService.getshortlist(this.temp_user_id).then(optionValues => {
      this.employees = optionValues;
      console.log(optionValues);
      //here we initialize locations and use this in our html template to bind dropdown values
    });
  }
  private viewprofile(user_id) {
    console.log(user_id);
    this.advancedSearchService.user_id = user_id;
    this.route.navigate(['view']);



  }
  private removewishlist(user_id) {

    this.shortlistService.notinterested(this.temp_user_id, user_id).then(optionValues => {

      console.log(optionValues);
      //here we initialize locations and use this in our html template to bind dropdown values
    });
    this.shortlistService.getshortlist(this.temp_user_id).then(optionValues => {
      this.employees = optionValues;
      console.log(optionValues);
      //here we initialize locations and use this in our html template to bind dropdown values
    });
  }

}
