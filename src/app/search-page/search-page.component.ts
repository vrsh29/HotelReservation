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
