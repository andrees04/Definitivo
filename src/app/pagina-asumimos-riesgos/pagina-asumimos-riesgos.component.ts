import { Component } from '@angular/core';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { FooterComponent } from '../componentes/footer/footer.component';



@Component({
  selector: 'app-pagina-asumimos-riesgos',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './pagina-asumimos-riesgos.component.html',
  styleUrl: './pagina-asumimos-riesgos.component.css'
})
export class PaginaAsumimosRiesgosComponent {
  titulo = "Pagina riesgos";
  subtitulo = "En colaboración con la sociedad";


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
