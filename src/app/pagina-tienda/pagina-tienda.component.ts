import { Component, numberAttribute } from '@angular/core';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../componentes/footer/footer.component';
import { ApiService } from '../servicio/api.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-pagina-tienda',
  standalone: true,
  imports: [EncabezadoComponent, RouterLink, RouterLinkActive, FooterComponent, NgIf],
  templateUrl: './pagina-tienda.component.html',
  styleUrl: './pagina-tienda.component.css'
})
export class PaginaTiendaComponent {
  titulo = "Inscripciones ";
  subtitulo = "En colaboración con la sociedad";

  textoDescuento = "Tienes un descuento pendiente...";
  rutaImagen = "assets/img/interrogante.png";
  
  // el <p> donde pone el descuento solo aparece cuando el descuento no este vacio
  // Y el boton desaparece tambien
  descuento = "vacio";

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
    var numeroAleatorio = Math.floor(Math.random() * (this.personajes.length) );
    var personaje = this.personajes[numeroAleatorio];


    this.textoDescuento = personaje.name + " te hace un descuento";
    
    // Calcular el descuento
    var temp: number;
    
    temp = personaje.id
    switch (personaje.status) {
      case "Alive": {
        temp *= 2;
        break;
      }
      case "Dead": {
        temp *= 3;
        break;
      }
    }

    if (personaje.gender == "Male" && personaje.location.name == "Earth (Replacement Dimension)") {
      temp = 42;
    }

    while (temp > 95) {
      temp -= 95;
    }

    this.descuento = temp + "%";
    this.rutaImagen = personaje.image
  }
}
