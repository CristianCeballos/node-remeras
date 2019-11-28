import { Component, OnInit } from '@angular/core';
import {Remera} from '../remera';
import { ToastrService } from 'ngx-toastr';
import {ControladorService} from '../controlador.service';

@Component({
  selector: 'app-remeras',
  templateUrl: './remeras.component.html',
  styleUrls: ['./remeras.component.css']
})
export class RemerasComponent implements OnInit {

  remeras: Remera[];
  remera: Remera;


  constructor(private toastr: ToastrService,protected controlador: ControladorService) { 

    this.remeras=controlador.getRemeras();
  
  }


  ngOnInit() {
  }

}
