import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvancedSearchService {

  constructor(private http: HttpClient) { }


  public optionValue : any;
  public user_id : any;
  

  //This method is used to get employee details for searched values.
  public advancesearchValues(title:String,city:String,education:String,rating:String,rates:String,experience:String,distance:String,latitude:String,longitude:String):Promise<String[]>{
    
    

    var url = 'http://localhost:3000/advancedsearch/search?city='+city+'&title='+title+'&education='+education+'&experience='+experience+'&rating='+rating+'&rates='+rates+'&distance='+distance+'&latitude='+latitude+'&longitude='+longitude;
    
    console.log(url);
    
     return this.http.get<String[]>(url).toPromise();
  }

  //This method is to add selected employee to current user wish list.
  public addtowishlist(user_id:String,employee_id:String):Promise<String[]>{
    
    

    var url = 'http://localhost:3000/advancedsearch/addtowishlist?user_id='+user_id+'&employee_id='+employee_id;
    
    console.log(url);
    
     return this.http.get<String[]>('http://localhost:3000/advancedsearch/addtowishlist?user_id='+user_id+'&employee_id='+employee_id).toPromise();
  } 
}
