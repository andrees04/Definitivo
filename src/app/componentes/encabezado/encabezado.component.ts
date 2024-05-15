import { NgIf } from '@angular/common';
import { Component, Input, input , HostBinding } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  @Input({required: true}) t!: string;
  @Input({required: true}) st!: string;
  @Input({required: false}) paginaFormacion!: boolean;
  @HostBinding('attr.ngSkipHydration') skipHydration = true;
}
