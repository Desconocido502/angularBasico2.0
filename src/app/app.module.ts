import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { BotonesComponent } from './botones/botones.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ExcelExportComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Agrega FormsModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
