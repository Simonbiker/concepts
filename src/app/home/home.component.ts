import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public frontEnd:boolean = false;
  public counterFront = false;

  constructor() { }

  ngOnInit(): void {
  }

  frontBtn() {
    this.frontEnd = !this.frontEnd;
  }

  counterBtn() {
    this.counterFront = !this.counterFront;
  }
}
