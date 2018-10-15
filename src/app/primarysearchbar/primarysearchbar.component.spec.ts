import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PrimarysearchbarComponent } from './primarysearchbar.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { SearchService } from '../providers/search.service';
import { DOCUMENT } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

describe('PrimarysearchbarComponent', () => {
  let component: PrimarysearchbarComponent;
  let fixture: ComponentFixture<PrimarysearchbarComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let httpClient:HttpClient;
  let router:Router;
  let service:SearchService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrimarysearchbarComponent],
      providers: [
        { 
          provide: Router, 
          useClass: class { navigate = jasmine.createSpy("navigate"); }
      },
        SearchService,HttpClientModule,HttpClient
         
      ]
    })
      .compileComponents();


      
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(PrimarysearchbarComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    component = new PrimarysearchbarComponent(service,document,router);
    var cities =[{city_id: "c_001", city_name: "California"},
    {city_id: "c_002", city_name: "New York"},
    {city_id: "c_003", city_name: "Los Angeles"},
    {city_id: "c_004", city_name: "Houston"},
    {city_id: "c_005", city_name: "Chicago"},
    {city_id: "c_006", city_name: "San Francisco"},
    {city_id: "c_007", city_name: "Columbus"},
    {city_id: "c_008", city_name: "Washington"},
    {city_id: "c_009", city_name: "Portland"},
    {city_id: "c_010", city_name: "Las Vegas"}]
   
    expect(component).toBeTruthy();
  });
});
