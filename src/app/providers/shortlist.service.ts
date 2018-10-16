import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShortListService {

  constructor(private http: HttpClient) { }


  public optionValue : any;
  public user_id : any;

  //This method is used to get wishlist from current user from database
  public getshortlist(user_id:String):Promise<String[]>{
    return this.http.get<String[]>('http://localhost:3000/shortlist/getwishlist?user_id='+user_id).toPromise();
  }
  //This method is used to remove selected employee from current user wish list.
  public notinterested(user_id:String,employee_id:String):Promise<String[]>{
    return this.http.get<String[]>('http://localhost:3000/shortlist/deletewishlist?user_id='+user_id+'&employee_id='+employee_id).toPromise();
  }
  
  
}
