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