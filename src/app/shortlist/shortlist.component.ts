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
/**
 * This class is used to show the wishlist of the user.
 * User can remove the selected employee from the wishlist.
 * User can view the employee profile.
 */
export class ShortlistComponent implements OnInit {
  //Document to get HTML element.
  document: any;

  //Employee list
  employees: any[];

  //user ID
  temp_user_id: String;
  constructor(private advancedSearchService: AdvancedSearchService, private route: Router, @Inject(DOCUMENT) document, private router: Router, private shortlistService: ShortListService) {
    this.document = document;
    this.temp_user_id = 'temp_user';
  }

  //Get all selected employee from the wish list for the current user.
  ngOnInit() {
    this.shortlistService.getshortlist(this.temp_user_id).then(results => {
      this.employees = results;
      console.log(results);
    });
  }
   /**
   * This method is used to navigate to View page.
   * @param user_id Selected empoyee ID
   */
  private viewprofile(user_id) {
    console.log(user_id);
    this.advancedSearchService.user_id = user_id;
    this.route.navigate(['view']);



  }

  /**
   * This method is used to remove selected employee from the wishlist.
   * @param user_id selected employee ID.
   */
  private removewishlist(user_id) {

    this.shortlistService.notinterested(this.temp_user_id, user_id).then(results => {

      console.log(results);
    });
    this.shortlistService.getshortlist(this.temp_user_id).then(results => {
      this.employees = results;
      console.log(results);
    });
  }

}
