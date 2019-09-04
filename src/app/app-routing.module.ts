import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from 'src/app/componentes/listar/listar.component';
import { CrearComponent } from 'src/app/componentes/crear/crear.component';
import { MenuComponent } from 'src/app/componentes/menu/menu.component';
import { EditarComponent } from 'src/app/componentes/editar/editar.component';
import { BorrarComponent } from 'src/app/componentes/borrar/borrar.component';


const routes: Routes = [
  {path:"", redirectTo:"menu", pathMatch:"full"},
  {path:"listar", component:ListarComponent},
  {path:"crear", component:CrearComponent},
  {path:"editar", component:EditarComponent},
  {path:"borrar", component:BorrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
