import { PaginaAsumimosRiesgosComponent } from './pagina-asumimos-riesgos/pagina-asumimos-riesgos.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaEstadisticasComponent } from './pagina-estadisticas/pagina-estadisticas.component';
import { PaginaPagosComponent } from './pagina-pagos/pagina-pagos.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { PaginaInicioSesionComponent } from './pagina-inicio-sesion/pagina-inicio-sesion.component';
import { PaginaRegistroComponent } from './pagina-registro/pagina-registro.component';
import { PaginaQuienesSomosComponent } from './pagina-quienes-somos/pagina-quienes-somos.component';
import { FormacionBasicaComponent } from './formacion-basica/formacion-basica.component';
import { FormacionAvanzadaComponent } from './formacion-avanzada/formacion-avanzada.component';
import { FormacionPremiumComponent } from './formacion-premium/formacion-premium.component';
import { Error404Component } from './componentes/error404/error404.component'
import { PaginaTiendaComponent } from './pagina-tienda/pagina-tienda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [

    { path: '',   redirectTo: '/pagina-principal', pathMatch: 'full' },

    { path: 'pagina-principal', title:"Home", component: PaginaPrincipalComponent },

    { path: 'pagina-asumimos-riesgos', component: PaginaAsumimosRiesgosComponent },
    
    { path: 'pagina-estadisticas', component: PaginaEstadisticasComponent },

    {path: 'pagina-quienes-somos', component: PaginaQuienesSomosComponent},

    { path: 'pagina-tienda', component: PaginaTiendaComponent },
    
    { path: 'pagina-pagos', component: PaginaPagosComponent },

    {path: 'pagina-contacto', component: PaginaContactoComponent},

    {path: 'pagina-inicio-sesion', component: PaginaInicioSesionComponent},

    {path: 'pagina-registro', component: PaginaRegistroComponent},

    {path: 'pagina-contacto', component: PaginaContactoComponent},

    {path: 'formacion-basica', component: FormacionBasicaComponent},

    {path: 'formacion-avanzada', component: FormacionAvanzadaComponent},

    {path: 'formacion-premium', component: FormacionPremiumComponent},

    {path: 'error404', component: Error404Component},

    {path: '**', redirectTo: '/error404'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }