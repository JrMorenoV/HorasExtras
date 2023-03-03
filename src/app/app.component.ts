import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EmpleadosComponent } from './empleados/empleados.component';
import { LogginService } from './LoggingService.service';
import { Empleado } from './persona.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Control de Entrada';
  persona: Empleado[] = [
    
  ];

  
  
 
  constructor(private LogginService: LogginService){
    const personas = localStorage.getItem('persona')
    this.persona = personas ? JSON.parse(personas) : [];
  }

  personaAgregada(persona: Empleado){
    this.LogginService.enviarMensajeAConsola
    ({mensaje: "Agregar al Arreglo Nuevo Empleado:" + persona.nombre})
    console.log()
    const match = this.persona.find(empleado => empleado.cedula === persona.cedula);
    if(match) {
      alert("Ya existe una persona con la cedula: " + persona.cedula)
      throw new Error("Ya existe una persona con la cedula: " + persona.cedula);
    }
     
     
    this.persona.push( persona );

    this.grabarLocalStorage(persona);
  }

  grabarLocalStorage (persona: Empleado): void{
    localStorage.setItem( 'persona', JSON.stringify (this.persona) );
    /*if(localStorage.getItem('persona') === null ){
      this.persona.push(persona);
      
    } else {
      this.persona = return JSON.parse(localStorage.getItem('persona'));
      this.persona.push(persona);
      localStorage.setItem( 'persona', JSON.stringify (this.persona) );
    }*/
   
  }

}

