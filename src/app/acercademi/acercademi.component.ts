import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  
  //Si se hace dato por dato se hace como lo que pusimos abajo comentado, esta es una forma pero no es la que va
  //nombre = 'Miguel Angel';
  //apellido = 'Trubiano'

  //Crear o inicializar variables de instancias para almacenar los datos con los que trata el servicio
  nombre: string = '';
  apellido: string = '';
  acerca_de_mi: string ='';
  
  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Metodos
    private porfolioService: PorfolioService,
    //Inyectar objeto router para permitir la navegación a la pagina individual
    //Public router: Router
  ) { 
    //El almacenar en la variable de instancia los datos recuperados por el Servicio puede ir aca?
    //this.porfolioService.getPorfolio();
  }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.porfolioService.getDatos().subscribe(porfolio => {
      console.log(porfolio);
      //definir información a mostrar-porfolio es igual a datos que es el json
      this.nombre=porfolio.nombre;
      this.apellido=porfolio.apellido;
      this.acerca_de_mi=porfolio.acerca_de_mi;
   })
  }
}
