import { Component, OnInit, Input } from '@angular/core';
import {Remera} from '../../remera';
import { ToastrService } from 'ngx-toastr';
import {ControladorService} from '../../controlador.service';

@Component({
  selector: 'app-remera',
  templateUrl: './remera.component.html',
  styleUrls: ['./remera.component.css']
})
export class RemeraComponent implements OnInit {

  @Input() remera;
  constructor(protected toastr:ToastrService, protected controlador:ControladorService) { 
    
  }

  public incrementar(){
    this.controlador.getCount();
  }

  showSuccess() {
    this.toastr.error('Utilice el carrito', 'Modulo desactivado', {
      timeOut: 3000
    });
  }
  comprar(){
    alert('redireccion a comprar ese articulo');
    return false;
  }
  carrito(remera:Remera){
    this.controlador.setCarrito(remera);
    
    console.log(this.incrementar());

    this.toastr.success('Enhorabuena', 'Se agrego al carrito', {
      timeOut: 3000
    });

    console.log('remera agregada',this.remera);
  }

  ngOnInit() {
  }

}
