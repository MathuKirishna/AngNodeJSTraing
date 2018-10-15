import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private Fraud() {
    this.router.navigate(['alert']);
  }

  private about() {
    this.router.navigate(['about']);
  }
  private contact() {

    this.router.navigate(['contact']);


  }
  private policy() {

    this.router.navigate(['policy']);


  }
  private terms() {

    this.router.navigate(['terms']);


  }
  private job() {

    this.router.navigate(['job']);


  }

}
