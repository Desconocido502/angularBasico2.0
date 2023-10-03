import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  constructor() { }

  ngOnInit(): void {}

  persona:Persona = {
    nombre: "Carlos",
    apellido: "Soto",
    edad: 23,
  };

  contador:number = 1;
  
  decrementar(){
    this.contador--;
  };

  incrementar(){
    this.contador++;
  };
}
