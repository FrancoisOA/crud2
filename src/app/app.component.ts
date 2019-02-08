import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'CRUD2';

  //arrreglo de empleado

  employees=  [
    {'nombre':'Juan', position: 'admin'},
    {'nombre':'pedro', position: 'admin'}
  ]


}
