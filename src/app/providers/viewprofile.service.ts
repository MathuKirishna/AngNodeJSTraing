import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewProfileService {

  constructor(private http: HttpClient) { }


  public optionValue : any;
  public user_id : any;

  public viewprofile(user_id:String):Promise<String[]>{
    return this.http.get<String[]>('http://localhost:3000/viewprofile/search?user_id='+user_id).toPromise();
  }
  public getgallery(user_id:String):Promise<String[]>{
    return this.http.get<String[]>('http://localhost:3000/viewprofile/gallery?user_id='+user_id).toPromise();
  }
  
}
