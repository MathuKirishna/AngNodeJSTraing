import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../providers/search.service';
import { AdvancedSearchService } from '../providers/advancedsearch.service';
import { ViewProfileService } from '../providers/viewprofile.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  document: any;
  user_id: any;
  user_details: any[];
  detail: any;
  user_galleries: any[];
  constructor(private advancedSearchService: AdvancedSearchService, private viewprofile: ViewProfileService) {
    this.user_id = this.advancedSearchService.user_id;
    console.log(this.user_id);
  }

  ngOnInit() {
    this.viewprofile.viewprofile(this.user_id).then(optionValues => {
      this.user_details = optionValues;

      console.log(optionValues);
      //here we initialize locations and use this in our html template to bind dropdown values
    });
    this.viewprofile.getgallery(this.user_id).then(optionValues => {
      this.user_galleries = optionValues;

      console.log(optionValues);
      //here we initialize locations and use this in our html template to bind dropdown values
    });


  }

}
