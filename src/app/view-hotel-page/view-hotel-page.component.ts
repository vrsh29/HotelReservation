import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-hotel-page',
  templateUrl: './view-hotel-page.component.html',
  styleUrls: ['./view-hotel-page.component.css']
})
export class ViewHotelPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _dataService: DataService) { }
  id: any;
  HotelDetails;

  ngOnInit() { 
    this.route.params.subscribe(params =>
      {
     
    this._dataService.getHotelDetail(params['id']).subscribe(res=>this.HotelDetails=res);

    // this.route.params.subscribe(params => {
    //   this._dataService.getHotelDetail(params['id']).subscribe(
    //     res => this.HotelDetails=res);}
    //   )
      console.log('Show details :',this.HotelDetails);
    })
  }
}
      // this.id = params['id'];
      // this.HotelDetails = this._dataService.getHotelDetail(this.id).subscribe(res => this.HotelDetails = res)
      // console.log("Show id :" + this.id)

    // })