import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { FlujoDetallePedidoComponent } from './pages/flujo-detalle-pedido/flujo-detalle-pedido.component';
import { FlujoConfirmacionComponent } from './pages/flujo-confirmacion/flujo-confirmacion.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'producto/:id',
    component: DetalleProductoComponent,
  },
  {
    path: 'detalle',
    component: DetalleProductoComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'detalle',
      },
    ],
  },
  {
    path: 'flujo-detalles',
    component: FlujoDetallePedidoComponent,
  },
  {
    path: 'flujo-confirmacion',
    component: FlujoConfirmacionComponent,
  },
  {
    path: 'productos',
    component: ListaProductosComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistroComponent,
  },
  {
    path: 'admin',
    component: AdministradorComponent,
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    paramsInheritanceStrategy:'always',
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
