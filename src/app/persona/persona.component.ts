import { Component, Input } from '@angular/core';
import { Empleado } from '../persona.model';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  @Input() persona: Empleado;
  @Input() indice:  number;


  
}
