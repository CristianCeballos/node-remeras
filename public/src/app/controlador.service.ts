import { Injectable } from '@angular/core';
import {Remera} from './remera'

@Injectable({
  providedIn: 'root'
})
export class ControladorService {

  remeras:Remera[]=[
    {
      "id":1,
      "nombre":"Cosas Imposibles",
      "descripcion":"Voluptatem consectetur nam, ducimus consequatur, eveniet atque ipsa repudiandae fugit quisquam placeat est dignissimos earum autem porro similique explicabo velit officia. Excepturi?",
      "imagen":'cosasimposibles.jpg',
      "precio":300
    },
    {
      "id":2,
      "nombre":"Daft Punk",
      "descripcion":"Voluptatem consectetur nam, ducimus consequatur, eveniet atque ipsa repudiandae fugit quisquam placeat est dignissimos earum autem porro similique explicabo velit officia. Excepturi?",
      "imagen":"daftpunk.jpg",
      "precio":400
    },
    {
      "id":3,
      "nombre":"Hakuna Matata (bitch)",
      "descripcion":"Voluptatem consectetur nam, ducimus consequatur, eveniet atque ipsa repudiandae fugit quisquam placeat est dignissimos earum autem porro similique explicabo velit officia. Excepturi?",
      "imagen":'hakuna.jpg',
      "precio":500
    },
    {
      "id":4,
      "nombre":"Ester Piscore",
      "descripcion":"Voluptatem consectetur nam, ducimus consequatur, eveniet atque ipsa repudiandae fugit quisquam placeat est dignissimos earum autem porro similique explicabo velit officia. Excepturi?",
      "imagen":"esterpiscore.jpg",
      "precio":600
    }
  ];
  prueba='todo funcionando';
  remerasCarrito:Remera[]=[];

  contador:number;

  total:number=0;

  public getCount(){
    this.contador=this.getCarrito().length;
  }
/* 
  getTotal(){
    this.remerasCarrito.forEach(remera => {
      this.total+=remera.precio;
      console.log('obejot remera: ',remera);
    });
    console.log('El total es: ',this.total);
    return this.total;
  } */

  getTotal(){
    this.total=0;
    for (let i = 0; i < this.remerasCarrito.length; i++) {
      this.total+=this.remerasCarrito[i].precio;
      
    }

    return this.total;
  }

  getRemeras(){
    return this.remeras;
  }

  getCarrito(){
    return this.remerasCarrito;
  }

  setCarrito(remera:Remera){
    
    this.remerasCarrito.push(remera);
  }

  deleteCarrito(remera:Remera){
    for (let i = 0; i < this.remerasCarrito.length; i++) {
      if(this.remerasCarrito[i]==remera)
      {
        this.remerasCarrito.splice(i,1);
        // this.total-=this.remerasCarrito[i].precio;
      }
      console.log('Este es el impoerte resultante',this.total);
      
    }

  }
  constructor() { 

  }
}
