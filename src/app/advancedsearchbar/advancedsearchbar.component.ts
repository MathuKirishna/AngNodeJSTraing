import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../providers/search.service';
import { AdvancedSearchService } from '../providers/advancedsearch.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-advancedsearchbar',
  templateUrl: './advancedsearchbar.component.html',
  styleUrls: ['./advancedsearchbar.component.css']
})
/**
 * This class used to provide advanced search functionalities for the app.
 * This class also provide a interface that user can add their prefered employee details on their wish list.
 * User can filter the searched results by distance,employee education, experience, rate adn reting.
 */
export class AdvancedsearchbarComponent implements OnInit {
  // Document used to get HTML elemets
  document: any;

  // User searched city
  city: String;

  //User search job titile
  jobTitle: String;

  //employees used to store searched results.
  employees: any[];

  //User id 
  temp_user_id: String;
  window: any;

  //User latitude and logitude
  latitude: String;
  longitude: String;

  //Popupmessage
  popup: String;
  constructor(private route: Router, private router: ActivatedRoute, private searchService: SearchService, @Inject(DOCUMENT) document, private advancedSearchService: AdvancedSearchService) {
    this.document = document;
    this.window = this.document.defaultView;

    //Since there is no user login following details are hard coded.
    this.temp_user_id = 'temp_user';
    this.latitude = '37.314831';
    this.longitude = '-121.763343';

    //Initial popup message value.
    this.popup = 'Added to wishlist';        

  }

  ngOnInit() {

    //Getting searched city,jobtitle,employess values from search service.
    this.city = this.searchService.getSearchCity();
    this.jobTitle = SearchService.searchTitle;
    this.employees = SearchService.optionValue;
    console.log(SearchService.searchCity);

  }

  /**
   * This method is used to filter the searched through selected filters.
   * It uses AdvancedSearchService to handle to request.
   * If there is no results for searched filter a popup says 'No Employees in current Search Criteria.
   */
  private advanceSearch() {
    this.advancedSearchService.advancesearchValues(this.jobTitle, this.city, this.document.getElementById('selectEducation').value, this.document.getElementById('selectRating').value, this.document.getElementById('selectRates').value, this.document.getElementById('selectExperience').value, this.document.getElementById('selectDistance').value, this.latitude, this.longitude).then(results => {
      if (results.length>0){
        console.log(results);
        SearchService.optionValue = results;
        console.log(SearchService.optionValue);
        this.employees = results;
      }
      else{
        console.log(results);
        SearchService.optionValue = results;
        console.log(SearchService.optionValue);
        this.employees = results;
        this.popup = 'No Employees in current Search Criteria'; 
        var message =  this.document.getElementById("snackbar");
        // Add the "show" class to DIV
         message.className = "show";

        // After 3 seconds, remove the show class from DIV
         setTimeout(function () { message.className = message.className.replace("show", ""); }, 3000);

      }
      


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
   * This method is used to navigate to List page.
   */
  private onClick() {

    this.route.navigate(['list']);

  }

  /**
   * This method used to added selected employee to user's Wishlist.
   * If the employee id already in the wishlist then a popup says "Already in the Wish List".
   * If not employee will added to user's wishlist and the popup says "Successfully Added to Wish List".
   * @param employee_id Selected employee id.
   */
  private addToWishList(employee_id) {
    this.advancedSearchService.addtowishlist(this.temp_user_id, employee_id).then(results => {
      console.log(results['affectedRows']);
      var message = this.document.getElementById("snackbar");
      if (results['affectedRows'] === 0) {

        this.popup = "Already in the Wish List";

        

      } else {

        this.popup = "Successfully Added to Wish List";


      }
      // Add the "show" class to DIV
      message.className = "show";

      // After 3 seconds, remove the show class from DIV
      setTimeout(function () { message.className = message.className.replace("show", ""); }, 3000);

    });



  }
  /**
   * Thsi method is used to reset the filters and the searched values of the employees.
   */
  private reset() {
    this.searchService.searchValues(this.jobTitle, this.city).then(results => {

      SearchService.optionValue = results;
      console.log(SearchService.optionValue);
      this.employees = results;
      this.city = this.searchService.getSearchCity();
      this.jobTitle = SearchService.searchTitle;
      this.document.getElementById('selectEducation').selectedIndex = "0";
      this.document.getElementById('selectRating').selectedIndex = "0";
      this.document.getElementById('selectRates').selectedIndex = "0";
      this.document.getElementById('selectExperience').selectedIndex = "0";
      this.document.getElementById('selectDistance').selectedIndex = "0";

    });



  }
}