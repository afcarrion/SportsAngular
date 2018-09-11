import { Injectable } from '@angular/core';

import { Galeria } from './galeria';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/observable';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

const API_URL = "../../assets/";
const galerias = '/galerias.json';

/**
* The service provider for everything related to books
*/
@Injectable()
export class GaleriaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of galeria retrieved from the API
    * @returns The list of books in real time
    */    
    getGalerias(): Observable<Galeria[]> {
        return this.http.get<Galeria[]>(API_URL + galerias);
    }
}
