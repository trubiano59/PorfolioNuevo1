import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';//1. se importa el servicio 
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  //2. se declara la lista que se va a recorrer con el ngFor
  experience: any = [];
  //variable para dato
  nombre : string = '';

  //3. se inyecta el servicio en el constructor
  constructor(private porfolioService: PorfolioService,) { } 
  
  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.porfolioService.getDatos().subscribe(porfolio => {
      console.log(porfolio);
      //se le asigna a lista educacion la lista de registros que hay en el json que debe ser el nombre igual a como esta en el json

      this.experience = porfolio.experiencias;
      console.log(porfolio);
      //informacion a mostrar
      this.experience = porfolio.experiencias;
 
   })    
  }

}
