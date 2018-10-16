import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }


  public static optionValue : String[];
  public static searchTitle : String;
  public static searchCity : String;

  public test:Promise<String[]>;
  //This method is used to get cities from the database
  public getDropDownValues(): Promise<String[]> {
    this.test = this.http.get<String[]>('http://localhost:3000/primarysearch/city').toPromise();
    console.log(this.test);
    return this.test;
  }
  //This id s get method for dearch city
  public getSearchCity():String {
    return SearchService.searchCity;
  }

  // This method is used to get titles from the database
  public gettitlesDropDownValues(): Promise<String[]> {
    return this.http.get<String[]>('http://localhost:3000/primarysearch/title').toPromise();
  }
  // This method is used to get employee details for selected city and job title from the database.
  public searchValues(title:String,city:String):Promise<String[]>{
    SearchService.searchTitle =title;
    SearchService.searchCity = city;
    return this.http.get<String[]>('http://localhost:3000/primarysearch/search?title='+title+'&city='+city).toPromise();
  }
}
