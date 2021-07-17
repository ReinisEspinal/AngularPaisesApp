import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SideBarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        SideBarComponent,
       
    ],
    exports:[
        SideBarComponent],
    imports:[ 
        CommonModule,
       RouterModule
    ],

    providers:[]
})
export class SharedModule{

}