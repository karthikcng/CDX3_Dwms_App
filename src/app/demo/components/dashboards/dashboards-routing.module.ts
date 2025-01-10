import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: {breadcrumb: 'Sales Dashboard'}, loadChildren: () => import('./sales/dashboardsales.module').then(m => m.DashboardSalesModule) },    
        { path: 'dwms', data: {breadcrumb: 'Dwms Dashboard'}, loadChildren: () => import('./dwms/dwms-routing.module').then(m => m.DwmsRoutingModule) },        
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }