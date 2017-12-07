import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  id:any;
 result:any;
 hotel:any;
 Hotel:any;

 params: URLSearchParams = new URLSearchParams();
 requestOptions = new RequestOptions();

  constructor(private _http: Http, private _httpClient: HttpClient) { }

  getHotelDetails(location,result) {
    this.params.set('location',location);
    this.params.set('count',result);
    this.requestOptions.search= this.params;

        return this._http.get('http://localhost:3000/api/Hotel',
         this.requestOptions)
         .map(Hotel => this.Hotel = Hotel.json().data);
        }
    /* this.hotels= this._httpClient.get("http://localhost:3000/api/Hotel", {
      params: new HttpParams()
        .set('location', location)
        .set('count', result) 
    });

    console.log("this.hotel"+this.hotel); */

  //   return this._httpClient.get("http://localhost:3000/api/Hotel",this.requestOptions)
  //  .map(Hotel => this.Hotel = Hotel.json().data); 

    //  return this._httpClient.get('http://localhost:3000/api/Hotel',)
    //  .map(Hotel => this.Hotel = Hotel.json().data); 
    
//     params: new HttpParams()
//     .set('location', location)
//     .set('count', result) 
// });
     //.map(Hotel => this.Hotel = Hotel.json().data);
       //console.log("hsandsd"+this.Hotel);
   getHotelDetail(id){
    console.log("Pass id" + id);
    return this._httpClient.get("http://localhost:3000/api/getHotelDetails",{params: new HttpParams()
    .set('id',id)
  });
        // console.log("Pass Id"+id);
        // this.params.set('id',id);
        //  this.requestOptions.search= this.params;
    
        //       return this._http.get('http://localhost:3000/api/getHotelDetail',
        //        this.requestOptions)
        //        .map(Hotel => this.Hotel = Hotel.json().data);
    
        }

  saveUserDetails(userName,userAddress,userLocation,userZip,HotelID) {
    console.log("USERNAME" + name);
      //  console.log("Name",Username);
      // console.log("Address",UserAddress);
      // console.log("City",UserLocation);
      // console.log("Pin",Zip);

    return this._httpClient.post('http://localhost:3000/saveHotel',
    {

      userName: userName,
      userAddress: userAddress,
      userLocation: userLocation,
      userZip: userZip,
      HotelID:HotelID 
    })

  }
}
