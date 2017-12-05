import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { ViewHotelPageComponent } from './view-hotel-page/view-hotel-page.component';
import { BookHotelComponent } from './book-hotel/book-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    ResultsPageComponent,
    ViewHotelPageComponent,
    BookHotelComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, ReactiveFormsModule, RouterModule
.forRoot([
  {path: 'home', component: HomePageComponent },
  {path: 'search', component: SearchPageComponent },
  {path: 'results/:location', component: ResultsPageComponent },
  {path: 'view-hotel', component: ViewHotelPageComponent},
  {path: 'book-hotel', component: BookHotelComponent},
  {path: '**', component: HomePageComponent}
]) ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
