<<<<<<< HEAD
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
  HotelDetails: any;

  ngOnInit() { 
    this.route.params.subscribe(params => {

      this.id = params['id'];
      this.HotelDetails = this._dataService.getHotelDetail(this.id).subscribe(res => this.HotelDetails = res)

      console.log("Show id :" + this.id)
      console.log("Show details :" + this.HotelDetails)
    })
  }

}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-hotel-page',
  templateUrl: './view-hotel-page.component.html',
  styleUrls: ['./view-hotel-page.component.css']
})
export class ViewHotelPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 88aaa41b17b6958c32fdaa35bae06fe436f45ac9
