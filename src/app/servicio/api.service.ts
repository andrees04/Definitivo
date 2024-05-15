import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  public getData(): Observable<any> 
  {
    return this.http.get<any>('https://rickandmortyapi.com/api/character/1,183,28,3,48,98,5,200');
  }
    
  }

