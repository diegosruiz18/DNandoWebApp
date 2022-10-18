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
    TablaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
