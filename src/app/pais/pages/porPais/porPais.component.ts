import { Component } from "@angular/core";
import { PaisService } from '../../services/pais.service';


@Component(
    {
        selector: 'app-porPais',
        templateUrl: './porPais.compoenent.html'
    }
)
export class PorPaisComponent {


    termino: string = '';

    constructor(private paisService:PaisService)
    {

    }
    buscar() {
        console.log(this.termino)
        this.paisService.buscarPais(this.termino)
        .subscribe(respuesta =>
            {
                console.log(respuesta);
            });
    }

}