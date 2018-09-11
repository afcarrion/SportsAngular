import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeportistaService } from './deportista.service';
import { DeportistaComponent } from './deportista-list/deportista.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../routing-module/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        DeportistaComponent
    ],
    providers: [DeportistaService],
    bootstrap: [DeportistaComponent]
})
export class DeportistaModule {}