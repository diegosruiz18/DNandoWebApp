import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CabeceraComponent } from './pages/cabecera/cabecera.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RedesComponent } from './components/redes/redes.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { RecomendacionComponent } from './components/recomendacion/recomendacion.component';
import { ProductosHomeComponent } from './pages/productos-home/productos-home.component';
import { ProductoHomeComponent } from './components/producto-home/producto-home.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { TestimonioComponent } from './components/testimonio/testimonio.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ResumenProductoComponent } from './components/resumen-producto/resumen-producto.component';
import { InfoProductoComponent } from './components/info-producto/info-producto.component';
import { FlujoDetallePedidoComponent } from './pages/flujo-detalle-pedido/flujo-detalle-pedido.component';

//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlujoConfirmacionComponent } from './pages/flujo-confirmacion/flujo-confirmacion.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosAdminComponent } from './pages/productos-admin/productos-admin.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CabeceraComponent,
    FooterComponent,
    NavbarComponent,
    MarcasComponent,
    ContactoComponent,
    RedesComponent,
    NoticiasComponent,
    NoticiaComponent,
    RecomendacionesComponent,
    RecomendacionComponent,
    ProductosHomeComponent,
    ProductoHomeComponent,
    TestimoniosComponent,
    TestimonioComponent,
    GaleriaComponent,
    ListaProductosComponent,
    TablaProductosComponent,
    DetalleProductoComponent,
    ResumenProductoComponent,
    InfoProductoComponent,
    FlujoDetallePedidoComponent,
    FlujoConfirmacionComponent,
    NosotrosComponent,
    LoginComponent,
    FormLoginComponent,
    RegistroComponent,
    AdministradorComponent,
    PedidosComponent,
    ProductosAdminComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es requerido',
          minlength: ({ requiredLength, actualLength }) => 
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
