import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent {
  num = [1, 2, 3 , 4, 5, 6, 7, 8];
  heroForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      Search_String: [''],
      Maximum_Result: '',
    });
  }
}
