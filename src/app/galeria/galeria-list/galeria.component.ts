import { Component, OnInit } from '@angular/core';
import { Galeria } from '../galeria';
import { GaleriaService } from '../galeria.service';

/**
 * The component for the list of galerias in the Sport
 */
@Component({
    selector: 'app-galeria',
    templateUrl: './galeria.component.html',
    styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

    /**
     * Constructor of the component
     * @param galeriaService The galeria's services provider
     */
    constructor(private galeriaService: GaleriaService) { }

    /**
     * The list of galerias in the Sport
     */
    galerias: Galeria[];

    /**
     * Asks the service to update the list of books
     */
    getGalerias(): void {
        this.galeriaService.getGalerias()
            .subscribe(galerias => this.galerias = galerias);
    }

    /**
     * This will initialize the component by retrieving the list of books from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getGalerias();
    }
}
