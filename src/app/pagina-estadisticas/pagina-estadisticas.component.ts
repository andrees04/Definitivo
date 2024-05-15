import { Component, OnInit } from '@angular/core';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { FooterComponent } from '../componentes/footer/footer.component';


@Component({
  selector: 'app-pagina-estadisticas',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './pagina-estadisticas.component.html',
  styleUrl: './pagina-estadisticas.component.css'
})
export class PaginaEstadisticasComponent {
  titulo = "Estadísticas";
  subtitulo = "En colaboracion con la sociedad";

  ngOnInit(): void {
    // Scroll hacia arriba cuando se carga la página
    window.scrollTo(0, 0);
  }

}
