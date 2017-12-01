import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
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
    BrowserModule,HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
