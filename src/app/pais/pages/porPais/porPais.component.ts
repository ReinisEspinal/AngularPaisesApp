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
hayError: boolean = false;


    constructor(private paisService: PaisService) {

    }
    buscar() {
        this.hayError=false;
        console.log(this.termino);

        this.paisService.buscarPais(this.termino)
            .subscribe(respuesta => {
                console.log(respuesta);
            }, (err) => {
                this.hayError=true;
            });
    }

}