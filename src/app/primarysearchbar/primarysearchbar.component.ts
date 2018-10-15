import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../providers/search.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-primarysearchbar',
  templateUrl: './primarysearchbar.component.html',
  styleUrls: ['./primarysearchbar.component.css']
})
export class PrimarysearchbarComponent implements OnInit {
  document: any;
  optionValues: any;


  constructor(private searchService: SearchService, @Inject(DOCUMENT) document, private router: Router) {
    this.document = document;

  }
  locations: any[];
  titles: any[];

  ngOnInit() {
    //NOTE:remind this is a async operation:retreive from server
    this.searchService.getDropDownValues().then(optionValues => {
      this.locations = optionValues;
      console.log(optionValues);
      //here we initialize locations and use this in our html template to bind dropdown values
    });

    //NOTE:remind this is a async operation:retreive from server
    this.searchService.gettitlesDropDownValues().then(optionValues => {
      this.titles = optionValues;
      console.log(optionValues);
      //here we initialize locations and use this in our html template to bind dropdown values
    });
  }
  private onClick() {

    this.searchService.searchValues(this.document.getElementById('inputStateTitle').value, this.document.getElementById('inputStateLocation').value).then(optionValues => {

      SearchService.optionValue = optionValues;
      console.log(SearchService.optionValue);
      this.router.navigate(['advancedsearch']);
    });

  }
}
