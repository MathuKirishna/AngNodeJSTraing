import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-secondarynavbar',
  templateUrl: './secondarynavbar.component.html',
  styleUrls: ['./secondarynavbar.component.css']
})
export class SecondarynavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
  private onClick() {

    this.router.navigate(['search']);
  }

}
