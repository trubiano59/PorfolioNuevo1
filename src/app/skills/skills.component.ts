import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  //Inicializar variables de instancia
  skills: any='[]';
  
 

  constructor(
      //Inyectar el Servicio para tener acceso en la clase a los Metodos
      private porfolioService: PorfolioService,
  ) { }

  ngOnInit(): void {
 //Esto es para almacenar en la variable de instancia los datos recuperados por el Servicio?
 this.porfolioService.getDatos().subscribe(porfolio => {
  //console.log(porfolio);
//definir información a mostrar-porfolio es igual a datos que es el json

this.skills=porfolio.skills;
//this.menuUno=porfolio.uno;
//*ngFor="let skill of skills"
});

}
}


 
