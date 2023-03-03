import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogginService } from '../LoggingService.service';
import { Empleado } from '../persona.model';
import { NgModel } from '@angular/forms';




@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  @Output() personaCreada = new EventEmitter<Empleado>();

  /*
  @ViewChild("nombreInput") nombreInput: ElementRef;
  @ViewChild("apellidoInput") apellidoInput: ElementRef;
  @ViewChild("cedulaInput") cedulaInput: ElementRef;
  @ViewChild("cargoInput") cargoInput: ElementRef;
  @ViewChild("areaInput") areaInput: ElementRef;
  @ViewChild("salarioInput") salarioInput: ElementRef;
  @ViewChild("correoInput") correoInput: ElementRef;
  */
  empleadosForm: FormGroup;
  //nombreInput: any;
  //apellidoInput: any;

  constructor(private logginService: LogginService, private fb: FormBuilder) {
    this.createFormGroup();
  }

  createFormGroup() {
    this.empleadosForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      cargo: ['', [Validators.required]],
      area: ['', [Validators.required]],
      salario: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      correo: ['', [Validators.required, Validators.email]]
    

    });
    
  }

  agregarPersona() {
    console.log(this.empleadosForm)
    if (this.empleadosForm.status === 'INVALID')
      return;
    console.log(this.empleadosForm)
    let persona1 = new Empleado(
      this.empleadosForm.value.nombre,
      this.empleadosForm.value.apellido,
      this.empleadosForm.value.cedula,
      this.empleadosForm.value.cargo,
      this.empleadosForm.value.area,
      this.empleadosForm.value.salario,
      this.empleadosForm.value.correo
    );
    this.logginService.enviarMensajeAConsola(this.empleadosForm.value);
    this.personaCreada.emit(persona1);
    this.empleadosForm.reset();
    this.empleadosForm.value.cedula.focus ();

  }


}


