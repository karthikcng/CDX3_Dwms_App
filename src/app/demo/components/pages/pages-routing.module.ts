import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'contact', data: { breadcrumb: 'Contact' }, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
        { path: 'timeline', data: { breadcrumb: 'Timeline' }, loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
