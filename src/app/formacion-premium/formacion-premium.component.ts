import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../componentes/footer/footer.component';
import { EncabezadoComponent } from '../componentes/encabezado/encabezado.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-formacion-premium',
  standalone: true,
  imports: [EncabezadoComponent,FooterComponent,RouterLink, RouterLinkActive, CommonModule, RouterOutlet],
  templateUrl: './formacion-premium.component.html',
  styleUrl: './formacion-premium.component.css'
})
export class FormacionPremiumComponent {
  titulo = "Formacion premium";
  subtitulo = "";


}
