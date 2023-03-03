import { NgModule } from "@angular/core";
import { RouterModule, Routes, } from "@angular/router";
import { EmpleadosComponent } from "./empleados/empleados.component";
import { PersonaComponent } from "./persona/persona.component";

const routes: Routes = [
    { 
    path: 'empleados', 
    component: EmpleadosComponent
    },
    { 
        path: 'datos', 
        component: PersonaComponent
        },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }