import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {
  route:Router;
  constructor(private router: Router) { 
    this.route=router;
  }

  ngOnInit() {
  }

  /**
   * This method is used to navigate PrimarySearch page.
   */
  onClick() {

    this.route.navigate(['search']);
    
  }

}