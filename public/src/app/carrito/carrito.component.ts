import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ControladorService } from '../controlador.service';
import { Remera } from '../remera';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  remeras: Remera[]=[];
  bandera:boolean=false;
  total:number=0;

  constructor(private toastr: ToastrService, protected servicio:ControladorService) { 

    this.remeras=servicio.getCarrito();
    if(this.remeras.length>0){
      this.bandera=true;
      this.total=this.servicio.getTotal();
    }

  }

  eliminar(remera:Remera){

    if(confirm('Desea quitar este producto?')){
    this.servicio.deleteCarrito(remera);
    this.total=this.servicio.getTotal();
    
    if(this.remeras.length>0){
      this.bandera=true;
    } else {
      this.bandera=false;
    }

    this.toastr.warning('Carrito', 'Se elimino articulo', {
      timeOut: 3000
    });

    this.servicio.getCount();

    console.log('remera eliminada ',remera)

  }
  }

  pagar(){
    return false;
  }

  ngOnInit() {
  }

}
