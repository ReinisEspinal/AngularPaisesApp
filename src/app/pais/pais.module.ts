import { NgModule } from "@angular/core";

import { PorCapitalComponent } from './pages/porCapital/porCapital.component';
import { PorPaisComponent } from './pages/porPais/porPais.component';
import { PorRegionComponent } from './pages/porRegion/porRegion.compoenent';
import { VerPaisComponent } from "./pages/verPais/verPais.component";
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations:[  
        PorCapitalComponent,
        PorPaisComponent,
        PorRegionComponent,
        VerPaisComponent
                ],
    imports:[
        FormsModule
    ],
    exports:[
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent],
    providers:[]
})
export class PaisModule{

}