import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public count = 0;

  constructor() { }

  ngOnInit(): void {
    const btns = document.querySelectorAll(".btn");
    btns.forEach(function (btn) {
      this.btnCountDescrease();
      this.btnCountReset();
      this.btnCountIncrease();
  });

  }

  btnCountIncrease() {
    this.count++;
    document.getElementById('value').style.color = "green";
  }

  btnCountDescrease() {
    this.count--;
    document.getElementById('value').style.color = "red";
  }

  btnCountReset() {
    this.count = 0;
    document.getElementById('value').style.color = "#222";
  }

}
