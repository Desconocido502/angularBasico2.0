import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {

  constructor() { }

  ngOnInit(): void {}

  img : string = "https://images.pexels.com/photos/18399245/pexels-photo-18399245/free-photo-of-brunette-woman-posing-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  img2 : string = "https://images.pexels.com/photos/14395818/pexels-photo-14395818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  img3 : string = "https://images.pexels.com/photos/15587503/pexels-photo-15587503/free-photo-of-wave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  SelectImg1(){
    this.img = this.img2;
  }

  SelectImg2(){
    this.img = this.img3;
  }


}
