import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
mostrar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
mostrate():void{
  this.mostrar=!this.mostrar
}
}
