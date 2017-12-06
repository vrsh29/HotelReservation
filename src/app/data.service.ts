import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import {HttpClient,HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  id:any;
 result:any;
 hotels:any;

 params: URLSearchParams = new URLSearchParams();
 requestOptions = new RequestOptions();

  constructor(private _http: Http, private _httpClient: HttpClient) { }

  getHotelDetails(location,maxResult) {
    // this.params.set('location',location);
    // this.params.set('count',maxResult);
    // this.requestOptions.search = this.params;

    return this._httpClient.get("http://localhost:3000/Hotel", {
      params: new HttpParams()
        .set('location', location)
        .set('count', maxResult) 
    });

    // this.hotels = this._http.get('http://localhost:3000/api/Hotel',this.requestOptions)
    // .map(hotels => this.hotels = hotels.json().data);
    //    console.log("hsandsd"+this.hotels);
  }

  getHotelDetail(id){
    
        console.log("Pass Id"+id);
        this.params.set('id',id);
         this.requestOptions.search= this.params;
    
              return this._http.get('http://localhost:4000/api/getHotelDetail',
               this.requestOptions)
               .map(hotels => this.hotels = hotels.json().data);
    
        }

  saveUserDetails(name, address, pin, city) {
    console.log("USERNAME" + name);

    return this._http.post('http://localhost:4000/api/updateCustomer',
      { name, address, pin, city })
      .map(hotels => this.hotels = hotels.json().data);
  }
}
