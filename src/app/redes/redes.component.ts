import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';//1. se importa el servicio 
@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
//2. se declara la lista que se va a recorrer con el ngFor
redes: any = [];
//variable para dato
  constructor(private porfolioService: PorfolioService,) { }

  ngOnInit(): void {
    //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio?
    this.porfolioService.getDatos().subscribe(porfolio => {
      //console.log(porfolio);
      this.redes = porfolio.redes;
    }) 
    }

}



  

  
  
