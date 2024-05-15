import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css'
})
export class Error404Component {

  constructor(private location: Location) {}

  volver() {
    this.location.back();
  }

}
