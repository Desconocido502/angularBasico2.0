import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.css']
})
export class ExcelExportComponent {

  constructor() {}

  // Función para convertir múltiples JSON a XLSX con múltiples hojas y descargar el archivo
  generateAndDownloadXLSX(): void {
    // Crear un objeto con las hojas de datos
    const dataObj: { [key: string]: any[] } = {
      'Sheet1': [
        { name: 'John', age: 30 },
        { name: 'Jane', age: 25 },
        { name: 'Bob', age: 40 }
      ],
      'Sheet2': [
        { product: 'Widget', price: 10 },
        { product: 'Gadget', price: 20 }
      ]
    };

    // Crear un libro de trabajo (Workbook) de XLSX
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    // Iterar a través de las hojas de datos en el objeto
    for (const sheetName in dataObj) {
      if (dataObj.hasOwnProperty(sheetName)) {
        const jsonData = dataObj[sheetName];
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
      }
    }

    // Generar el archivo XLSX en formato de array
    const xlsxData: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Convertir el array en un Blob
    const blob: Blob = new Blob([xlsxData], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Crear una URL para el blob
    const blobURL: string = URL.createObjectURL(blob);

    // Crear un elemento <a> para descargar el archivo
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = blobURL;
    a.download = 'data.xlsx'; // Nombre del archivo XLSX

    // Simular un clic en el elemento <a> para iniciar la descarga
    a.click();

    // Liberar la URL
    URL.revokeObjectURL(blobURL);
  }
}
