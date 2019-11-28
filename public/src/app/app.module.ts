import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';

import {RouterModule,Route} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RemerasComponent } from './remeras/remeras.component';
import { CarritoComponent } from './carrito/carrito.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {ControladorService} from './controlador.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RemeraComponent } from './remeras/remera/remera.component'


const routes:Route[]=[
  {
    path:'', component: InicioComponent
  },
  {
    path:'hola', component: HolaMundoComponent
  },
  {
    path:'remeras', component: RemerasComponent
  },
  {
    path:'carrito', component: CarritoComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    InicioComponent,
    RemerasComponent,
    CarritoComponent,
    HeaderComponent,
    FooterComponent,
    RemeraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right'
    })

  ],
  providers: [
    ControladorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
