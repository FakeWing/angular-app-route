import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CrearComponent,
    BorrarComponent,
    EditarComponent,
    MenuComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    FormsModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
