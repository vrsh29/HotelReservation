<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, AbstractControl } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent {

  number: number[];
  hotelForm: FormGroup;
  search: AbstractControl;
  numb: AbstractControl;
  users;


  constructor(private fb: FormBuilder, private router: Router, private _dataService: DataService) {
    this.number = [1, 2, 3, 4, 5, 6, 7, 8];
    
    this.hotelForm = fb.group({
      "numb": ['', Validators.required],
      "search": ['', Validators.required]
    })
    this.numb = this.hotelForm.controls['numb'];
    this.search = this.hotelForm.controls['search'];

     //this._dataService.getHotelDetails(location, result).subscribe(res => this.users = res);
  }
  
     doSearch(value){
      console.log("In search");
       this.router.navigate(['/results',value.search,value.numb]);
    }
   }
=======
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule,  } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent {
num = [1, 2, 3 , 4, 5, 6, 7, 8];

  // numForm = new FormGroup({
  //   MaxResults: new FormControl
  // });

  // hotelForm= new FormGroup({
  //   Search_String: new FormControl
  // });

  constructor(private fb: FormBuilder, private router: Router) {
  }

  doSearch(value){
  this.router.navigate(['result'],value.Search_String);
}
}
>>>>>>> 88aaa41b17b6958c32fdaa35bae06fe436f45ac9
