import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHotelPageComponent } from './view-hotel-page.component';

describe('ViewHotelPageComponent', () => {
  let component: ViewHotelPageComponent;
  let fixture: ComponentFixture<ViewHotelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHotelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
