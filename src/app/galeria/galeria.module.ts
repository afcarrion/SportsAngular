import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaService } from './galeria.service';
import { GaleriaComponent } from './galeria-list/galeria.component';
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
        GaleriaComponent
    ],
    providers: [GaleriaService],
    bootstrap: [GaleriaComponent]
})
export class GaleriaModule {}