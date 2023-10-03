import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {

  constructor() { }

  ngOnInit(): void {}

  text_color: string = "";

  button_disabled:boolean = false;

  activeDesactiveDisabled(){
    this.button_disabled = !this.button_disabled;
  }

}
