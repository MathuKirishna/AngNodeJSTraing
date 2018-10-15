import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';


import { HomepageComponent } from './homepage.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Component, NgModule } from '@angular/core';
import { Routes, ROUTES } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let router : Router;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      providers: [
        { provide: Router,useValue: routerSpy  }
      ]
      
    })
      .compileComponents();
  }));

  // beforeEach(() => {
    
    
  // });

  it('should create', ()=> {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Check h2',()=>{
    fixture = TestBed.createComponent(HomepageComponent);
    debugElement = fixture.debugElement.query(By.css('h2'));
    htmlElement =debugElement.nativeElement;
    expect(htmlElement.textContent).toContain('Great hair ');
  });


});
