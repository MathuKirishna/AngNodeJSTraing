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
/**
 * This class is used to view selected emplpoyee profile.
 */
export class ViewProfileComponent implements OnInit {
  //Document used to get HTML element.
  document: any;

  //Selected employee user id.
  user_id: any;

  //Selected employee user details.
  user_details: any[];

  //Selected emplpoyee galleries
  user_galleries: any[];
  constructor(private advancedSearchService: AdvancedSearchService, private viewprofile: ViewProfileService) {
    this.user_id = this.advancedSearchService.user_id;
    console.log(this.user_id);
  }

  //while deploying the page below method ensures that userdetails and user gallery detail are stored.
  ngOnInit() {
    this.viewprofile.viewprofile(this.user_id).then(results => {
      this.user_details = results;

      console.log(results);
      
    });
    this.viewprofile.getgallery(this.user_id).then(results => {
      this.user_galleries = results;

      console.log(results);
    });


  }

}
