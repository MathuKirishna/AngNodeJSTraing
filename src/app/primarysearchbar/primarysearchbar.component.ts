import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../providers/search.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-primarysearchbar',
  templateUrl: './primarysearchbar.component.html',
  styleUrls: ['./primarysearchbar.component.css']
})
/**
 * This class provided primary search functionalitites to the app.
 * User can search employees by city and job title.
 */
export class PrimarysearchbarComponent implements OnInit {
  //Document used to get HTML elements.
  document: any;

  //locations used to list of cities
  locations: any[];

  //Titles used to store job titles.
  titles: any[]

  //Popupmessage
  popup: String;
  
 


  constructor(private searchService: SearchService, @Inject(DOCUMENT) document, private router: Router) {
    this.document = document;

    //Initial popup message value.
    this.popup = 'No Employees in current Search Criteria'; 
  }
  ;

  ngOnInit() {
    //NOTE:remind this is a async operation:retreive from server
    this.searchService.getDropDownValues().then(results => {
      this.locations = results;
      console.log(results);
      //here we initialize locations and use this in our html template to bind dropdown values
    });

    //NOTE:remind this is a async operation:retreive from server
    this.searchService.gettitlesDropDownValues().then(results => {
      this.titles = results;
      console.log(results);
      //here we initialize locations and use this in our html template to bind dropdown values
    });
  }
  /**
   * This method is used to search employess by selected city and job title and navigate to Advanced search.
   */
  private onClick() {

    this.searchService.searchValues(this.document.getElementById('inputStateTitle').value, this.document.getElementById('inputStateLocation').value).then(results => {

        if (results.length>0){
          SearchService.optionValue = results;
          console.log(SearchService.optionValue);
           this.router.navigate(['advancedsearch']);
        } else{
          var message =  this.document.getElementById("snackbar");
          // Add the "show" class to DIV
           message.className = "show";

          // After 3 seconds, remove the show class from DIV
           setTimeout(function () { message.className = message.className.replace("show", ""); }, 3000);

        }
        
      
        console.log(results);
      
      
    });

  }
}
