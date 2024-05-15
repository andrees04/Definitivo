import { Component } from '@angular/core';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../componentes/footer/footer.component';
import { ApiService } from '../servicio/api.service';


@Component({
  selector: 'app-pagina-tienda',
  standalone: true,
  imports: [EncabezadoComponent, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './pagina-tienda.component.html',
  styleUrl: './pagina-tienda.component.css'
})
export class PaginaTiendaComponent {
  titulo = "Inscripciones ";
  subtitulo = "En colaboración con la sociedad";

  textoDescuento = "Tienes un descuento pendiente...";
  descuento = 6.9;

  personajes: any[] = [];

  constructor(private apiService: ApiService) {}
  
  ngOnInit() : void {
      window.scrollTo(0, 0);
    this.apiService.getData().subscribe(
      data => {
        this.personajes = data;
      }
    );
  }

  public hacerDescuento() : void {
    this.textoDescuento = "iouashdiofuahsiodfhasf";
  }
}
