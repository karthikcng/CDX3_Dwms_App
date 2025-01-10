import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DwmsComponent } from './dwms.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DwmsComponent }
    ])],
    exports: [RouterModule]
})
export class DwmsRoutingModule { }