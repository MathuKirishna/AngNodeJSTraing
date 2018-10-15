import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShortListService {

  constructor(private http: HttpClient) { }


  public optionValue : any;
  public user_id : any;

  public getshortlist(user_id:String):Promise<String[]>{
    return this.http.get<String[]>('http://localhost:3000/shortlist/getwishlist?user_id='+user_id).toPromise();
  }
  public notinterested(user_id:String,employee_id:String):Promise<String[]>{
    return this.http.get<String[]>('http://localhost:3000/shortlist/deletewishlist?user_id='+user_id+'&employee_id='+employee_id).toPromise();
  }
  
  
}
