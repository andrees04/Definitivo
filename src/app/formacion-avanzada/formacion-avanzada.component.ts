import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../componentes/footer/footer.component';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-formacion-avanzada',
  standalone: true,
  imports: [EncabezadoComponent,FooterComponent,RouterLink, RouterLinkActive, CommonModule, RouterOutlet],
  templateUrl: './formacion-avanzada.component.html',
  styleUrl: './formacion-avanzada.component.css'
})
export class FormacionAvanzadaComponent {
  titulo = "Formacion avanzada";
  subtitulo = "";

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


}
