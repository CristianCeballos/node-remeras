import { Component, OnInit } from '@angular/core';
import { ControladorService } from '../controlador.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  contador:number=0;

  constructor(public servicio:ControladorService) {

   }

  ngOnInit() {
  }

}
