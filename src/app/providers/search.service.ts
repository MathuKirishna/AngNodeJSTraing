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
  public getDropDownValues(): Promise<String[]> {
    this.test = this.http.get<String[]>('http://localhost:3000/primarysearch/city').toPromise();
    console.log(this.test);
    return this.test;
  }
  public getSearchCity():String {
    return SearchService.searchCity;
  }
  //u can use promise or observables
  // NOTE:always use services to connect to server since it is a good practice
  public gettitlesDropDownValues(): Promise<String[]> {
    return this.http.get<String[]>('http://localhost:3000/primarysearch/title').toPromise();
  }
  public searchValues(title:String,city:String):Promise<String[]>{
    SearchService.searchTitle =title;
    SearchService.searchCity = city;
    return this.http.get<String[]>('http://localhost:3000/primarysearch/search?title='+title+'&city='+city).toPromise();
  }
}
