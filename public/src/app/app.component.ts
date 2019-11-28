import { Component } from '@angular/core';
import {ControladorService} from '../app/controlador.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';
  contador:number;

  
constructor(protected servicio:ControladorService){
  this.setContador();
}


setContador(){
  this.contador=this.servicio.getCarrito().length;
}

 
}
