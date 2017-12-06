import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router} from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  hotel:any;

  searchValue: string;
  result: any;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }
 
  ngOnInit() 
  {
   this.route.params.subscribe(params => {

   //this.dataService.getHotelDetails(params['location'],3).subscribe(res => this.hotel=res );
   console.log("obj"+this.hotel);
  });
  }
  }