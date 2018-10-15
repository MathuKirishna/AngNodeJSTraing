import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { inject } from '@angular/core/testing';
import { SearchService } from './search.service';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';

describe('SearchService', () => {
    let searchService:SearchService;
    let httpClient:HttpClient;
    let httpMock:HttpTestingController;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[SearchService]
        });
        searchService=TestBed.get(SearchService);
        httpMock = TestBed.get(HttpTestingController);
        httpClient= TestBed.get(HttpClient);
    });
      
    
     it('Check City URL',()=>{
         
          searchService = new SearchService (httpClient);
          searchService.getDropDownValues();

          const request = httpMock.expectOne('http://localhost:3000/primarysearch/city');
          expect(request.request.method).toBe('GET');
     });
     it('Check Titles URL',()=>{
         
        searchService = new SearchService (httpClient);
        searchService.gettitlesDropDownValues();

        const request = httpMock.expectOne('http://localhost:3000/primarysearch/title');
        expect(request.request.method).toBe('GET');
   });
   it('Check getCity Method',()=>{
         
    searchService = new SearchService (httpClient);
    searchService.searchValues('test_title','test_city');
    expect(searchService.getSearchCity()).toBe('test_city');

    // const request = httpMock.expectOne('http://localhost:3000/primarysearch/search');
    // expect(request.request.method).toBe('GET');
});

    
  });
  