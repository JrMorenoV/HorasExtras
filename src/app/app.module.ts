import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { LogginService } from './LoggingService.service';
import { PersonaComponent } from './persona/persona.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    PersonaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([

      {path: 'persona', component: PersonaComponent},
      //{path: '', redirectTo: '/persona', pathMatch: 'full'},
      //{path: '**', component: PersonaComponent}
    ]),
  ],
  providers: [LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
