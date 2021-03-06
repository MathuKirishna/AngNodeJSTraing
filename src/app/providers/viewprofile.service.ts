import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewProfileService {

  constructor(private http: HttpClient) { }


  public user_id : any;

  //This method is used to retrive  selected user details from database
  public viewprofile(user_id:String):Promise<String[]>{
    return this.http.get<String[]>('http://localhost:3000/viewprofile/search?user_id='+user_id).toPromise();
  }
  //This method is used to retrive selected user gallery from database
  public getgallery(user_id:String):Promise<String[]>{
    return this.http.get<String[]>('http://localhost:3000/viewprofile/gallery?user_id='+user_id).toPromise();
  }
  
}
