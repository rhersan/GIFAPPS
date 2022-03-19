import { Component } from '@angular/core';

import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

get historial(){
  return this.gifsService.historia;
}
  constructor(private gifsService: GifsService) { 


  }

  buscarGif(query: string){
    this.gifsService.buscarGifs(query);
  }
}
