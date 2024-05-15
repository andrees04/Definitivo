import { Component } from '@angular/core';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { FooterComponent } from '../componentes/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-inicio-sesion',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent, RouterLink],
  templateUrl: './pagina-inicio-sesion.component.html',
  styleUrl: './pagina-inicio-sesion.component.css'
})
export class PaginaInicioSesionComponent {
  titulo = "Potencia tus estudios sobre la educacion sexual";
  subtitulo = "En colaboracion con la sociedad";

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
