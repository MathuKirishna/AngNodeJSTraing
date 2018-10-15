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
export class AdvancedsearchbarComponent implements OnInit {
  document: any;
  values: any;
  city: String;
  jobTitle: String;
  employees: any[];
  temp_user_id: String;
  window: any;
  latitude:String;
  longitude:String;
  popup:String;
    constructor(private route: Router, private router: ActivatedRoute, private searchService: SearchService, @Inject(DOCUMENT) document, private advancedSearchService: AdvancedSearchService) {
    this.document = document;
    this.window = this.document.defaultView;
    this.temp_user_id = 'temp_user';
    this.latitude = '37.314831';
    this.longitude = '-121.763343';
    this.popup = 'Added to wishlist';        // this.city = SearchService.searchCity;
    // this.jobTitle = SearchService.searchTitle;
    // this.employees = SearchService.optionValue;

  }

  ngOnInit() {
    this.city = this.searchService.getSearchCity();
    this.jobTitle = SearchService.searchTitle;
    this.employees = SearchService.optionValue;
    console.log(SearchService.searchCity);

  }

  private advanceSearch() {
    this.advancedSearchService.advancesearchValues(this.jobTitle, this.city, this.document.getElementById('selectEducation').value, this.document.getElementById('selectRating').value, this.document.getElementById('selectRates').value, this.document.getElementById('selectExperience').value, this.document.getElementById('selectDistance').value,this.latitude,this.longitude).then(optionValues => {
      console.log(optionValues);


      SearchService.optionValue = optionValues;
      console.log(SearchService.optionValue);
      this.employees = optionValues;


    });
  }
  private viewprofile(user_id) {
    console.log(user_id);
    this.advancedSearchService.user_id = user_id;
    this.route.navigate(['view']);



  }
  private onClick() {

    this.route.navigate(['list']);

  }
  private addToWishList(employee_id) {
    this.advancedSearchService.addtowishlist(this.temp_user_id, employee_id).then(optionValues => {
      console.log(optionValues['affectedRows']);
      var x = this.document.getElementById("snackbar");
      if (optionValues['affectedRows'] === 0) {
        
        this.popup= "Already in the Wish List";

    // Add the "show" class to DIV
    

    // After 3 seconds, remove the show class from DIV
    
      } else {
        
        this.popup= "Successfully Added to Wish List";

    
      }
      // Add the "show" class to DIV
        x.className = "show";

  // After 3 seconds, remove the show class from DIV
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    });



  }
  private reset(){
    this.searchService.searchValues(this.jobTitle, this.city).then(optionValues => {

      SearchService.optionValue = optionValues;
      console.log(SearchService.optionValue);
      this.employees = optionValues;
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