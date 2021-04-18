import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.css']
})
export class ColorChangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let btn = document.getElementById('btn');
    let color = document.querySelector('.color');  

    btn.addEventListener('click', function(){
      // a var to hold the #
      let hexColor = '#';
      for(let i = 0; i<6; i++){
          hexColor += hex[Math.floor(Math.random() * hex.length)];
      }
     color.textContent = hexColor; 
    // document.body.style.backgroundColor = hexColor;
    document.getElementById('color-background').style.backgroundColor = hexColor;
  });
  }

}
