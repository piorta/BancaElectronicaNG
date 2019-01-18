import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
/*import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';*/


//import { CuentasComponent} from './posicion-consolidada/view/cuentas.component';

import { PosConsolidadaComponent} from './pos-consolidada/pos-consolidada.component';
import { MovimientosComponent} from './movimientos/movimientos.component';
import { PrestamosSoliComponent} from './prestamos-solicitud/prestamos-soli.component';
import { PrestamosPagosComponent} from './prestamos-pagos/prestamos-pagos.component';
import { PrestamoSimuladorComponent } from './prestamos-simulador/prestamo-simu.component';
import { TransfActivacionComponent } from './transf-activacion/transf-activacion.component';
import { TransfDirectaComponent } from './transf-directa/transf-directa.component';
import { TransfHistorialComponent } from './transf-historial/transf-historial.component';
import { TransfOtrosComponent } from './transf-otros/transf-otros.component';



export const routes: Routes = [

    { path: '', component: PosConsolidadaComponent },
    { path: 'movimientos', component: MovimientosComponent },
    { path: 'solicitudp', component: PrestamosSoliComponent },
    { path: 'pagosp', component: PrestamosPagosComponent },
    { path: 'simuladorp', component: PrestamoSimuladorComponent },
    { path: 'transfactiv', component: TransfActivacionComponent },
    { path: 'transfdirecta', component: TransfDirectaComponent },
    { path: 'transfhistorial', component: TransfHistorialComponent},
    { path: 'transfotros', component: TransfOtrosComponent},
    
    
    /* { path: '', component: DashboardDemoComponent },

    { path: 'posicion-consolidada', component: PosConsolidadaComponent }, */
    /* { path: 'prestamos', component: CuentasComponent },
    { path: 'transferencias', component: CuentasComponent },
    { path: 'movimientos', component: CuentasComponent }, */

    
    /* { path: 'sample', component: SampleDemoComponent },
    { path: 'forms', component: FormsDemoComponent },
    { path: 'data', component: DataDemoComponent },
    { path: 'panels', component: PanelsDemoComponent },
    { path: 'overlays', component: OverlaysDemoComponent },
    { path: 'menus', component: MenusDemoComponent },
    { path: 'messages', component: MessagesDemoComponent },
    { path: 'misc', component: MiscDemoComponent },
    { path: 'empty', component: EmptyDemoComponent },
    { path: 'charts', component: ChartsDemoComponent },
    { path: 'file', component: FileDemoComponent },
    { path: 'documentation', component: DocumentationComponent } */
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
