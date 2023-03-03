export class Empleado{
    value: string;
  push: any;
    
    constructor(
        public nombre: string, 
        public apellido: String,
        public cedula: Number,
        public cargo: string,
        public area: string,
        public salario: Number,
        public correo: string,
        
        ){}
}