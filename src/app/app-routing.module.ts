import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {VendedorPedidosComponent} from "./componentes/vendedor-pedidos/vendedor-pedidos.component"

const routes: Routes = [
  {path: '', component: VendedorPedidosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
