import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


import { SideBarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations:[
        SideBarComponent
    ],
    exports:[
        SideBarComponent],
    imports:[ 
        CommonModule],

    providers:[]
})
export class SharedModule{

}