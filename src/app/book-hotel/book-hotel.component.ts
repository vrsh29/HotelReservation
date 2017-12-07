import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes,Router,ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup ,Validators,AbstractControl,FormBuilder} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.css']
})
export class BookHotelComponent implements OnInit {

  id: any;
  HotelDetails: any;
  username: AbstractControl;
  numb: AbstractControl;
  userSaved: any;
  userForm : FormGroup;
  userName:AbstractControl;
  userAddress:AbstractControl;
  userLocation:AbstractControl;
  userZip:AbstractControl;

  // userForm = new FormGroup({
  //   userName: new FormControl(),
  //   userAddress: new FormControl(),
  //   userCity: new FormControl(),
  //   userZip: new FormControl()

  // });

  successAlert=false;

  constructor(private activatedRoute: ActivatedRoute, private _dataService: DataService,private formBuilder: FormBuilder) { 
    
    this.userForm= formBuilder.group({
      "userName": ['', Validators.required],
      "userAddress": ['',Validators.required],
      "userLocation": ['',Validators.required],
      "userZip": ['',Validators.required]
    });

    this.userName=this.userForm.controls['userName'];
    this.userAddress=this.userForm.controls['userAddress'];
    this.userLocation=this.userForm.controls['userLocation'];
    this.userZip=this.userForm.controls['userZip'];
}
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this._dataService.getHotelDetail(params['id']).subscribe(
        res => this.HotelDetails=res
    );
    }
  )
  }
    //   saveUser(value) {
    //    this._dataService.saveUserDetails(
    //    this.userForm.get('userName').value,
    //    this.userForm.get('userAddress').value,
    //    this.userForm.get('userCity').value,
    //    this.userForm.get('userZip').value),
    //    this.HotelDetails[0].id).subscribe (
    //    res => this.userSaved =res
    //  );
    // }
   // console.log("Submit data" + this.userForm.get('username').value);

    successAlertMethod() {
      if(this.userForm.valid)
      {
        this.successAlert=true;
        return this.successAlert;
      }
      else
      return this.successAlert;
    }
  }
