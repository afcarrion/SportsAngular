import { Component, OnInit } from '@angular/core';
import { DeportistaService } from '../deportista.service';
import { Deportista } from '../deportista';

@Component({
    selector: 'app-deportista',
    templateUrl: './deportista.component.html',
    styleUrls: ['./deportista.component.css']
})
export class DeportistaComponent implements OnInit {

    /**
     * Constructor for the component
     * @param deportistaService The author's services provider
     */
    constructor(private deportistaService: DeportistaService) { }
    
    /**
     * The list of authors which belong to the BookStore
     */
    deportistas: Deportista[];

    /**
     * Asks the service to update the list of authors
     */
    getDeportistas(): void {
        this.deportistaService.getDeportistas()
            .subscribe(deportistas => this.deportistas = deportistas);
    }

    /**
     * This will initialize the component by retrieving the list of authors from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getDeportistas();
    }

}
