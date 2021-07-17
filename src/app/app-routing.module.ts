import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { PorPaisComponent } from './pais/pages/porPais/porPais.component';
import { PorRegionComponent } from './pais/pages/porRegion/porRegion.compoenent';
import { PorCapitalComponent } from './pais/pages/porCapital/porCapital.component';
import { VerPaisComponent } from './pais/pages/verPais/verPais.component';

const routes: Routes = [
    {
        //Por default -> ''
        path:'',
        component: PorPaisComponent,
        pathMatch:'full'
    },
    {
        path:'region',
        component: PorRegionComponent
    },
    {
        path:'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component:VerPaisComponent
    },
    {
        path:'*',
        redirectTo:''
    }
]

@NgModule({
    declarations:[],
    imports:[],
    exports:[],
    providers:[]
})
export class AppRouting{

}