<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router} from '@angular/router';
import { DataService } from '../data.service';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css']
})
export class ResultsPageComponent implements OnInit {
  Hotel:any;
  searchValue: any;
  result: any;
 
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() 
  {
   this.activatedRoute.params.subscribe(params =>{

   // console.log("obj"+params['location']);
  this.dataService.getHotelDetails(params['location'],params['result']).subscribe(res => this.Hotel = res);
   
     }
    );
}
}
=======
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
>>>>>>> 88aaa41b17b6958c32fdaa35bae06fe436f45ac9
