//Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';
//Esto es para suscribirse y recibir respuesta de forma asincronica 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
//El primer http que esta con minuscula se llama alias
  constructor(private http: HttpClient) { }

  //Metodo Observable que devuelve los datos
  getDatos():Observable<any> {
    //Se llama al JSON con su path.-ruta-, o bien, en su lugar se puede poner una URL para traer datos online
    return this.http.get('./assets/json/porfolio.json');
    }
}
