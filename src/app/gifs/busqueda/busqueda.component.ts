import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {
  //Limpiar caja de búsqueda.
  // usando decorador @ViewChild
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  // Inyección de dependencias
  constructor(private gifsService: GifsService){

  }
  buscar(){
    const valor = this.txtBuscar.nativeElement.value; 
    if(valor.trim().length == 0){return;}   
    // Para usar este metodo sae debe de inyecta dependencia del servicio
    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = ''
  }
}
