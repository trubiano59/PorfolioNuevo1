import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensaje!: string;
  form: any = {
    email: null,
    password: null,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
