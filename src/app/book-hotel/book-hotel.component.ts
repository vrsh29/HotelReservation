import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.css']
})
export class BookHotelComponent implements OnInit {

  id: any;
  hotelDetails: any;
  username: AbstractControl;
  numb: AbstractControl;
  userSaved: any


  userForm = new FormGroup({
    userName: new FormControl(),
    userAddress: new FormControl(),
    userCity: new FormControl(),
    userZip: new FormControl()

  });

  constructor(private activatedRoute: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

      this.id = params['id'];
      this.hotelDetails = this._dataService.getHotelDetail(this.id).subscribe(res => this.hotelDetails = res)

      // console.log("Show id:::"+this.id)
      //console.log("Show details:::"+this.hotelDetails)

    })
  }

  userData() {

      this._dataService.saveUserDetails(
      this.userForm.get('userName').value,
      this.userForm.get('userAddress').value,
      this.userForm.get('userCity').value,
      this.userForm.get('userZip').value).subscribe(res => this.userSaved = res)

      ;

    console.log("Submit data" + this.userForm.get('username').value);

  }

}
