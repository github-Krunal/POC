import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-tojson',
  templateUrl: './excel-tojson.component.html',
  styleUrls: ['./excel-tojson.component.scss'],
})
export class ExcelTojsonComponent implements OnInit {
  public list: any[] = [];
  constructor() {}

  ngOnInit(): void {}
  // onFileChange(event) {
  //   let workBook = null;
  //   let jsonData = null;
  //   const reader = new FileReader();
  //   const file = event.target.files[0];
  //   reader.onload = (event) => {
  //     const data = reader.result;
  //     workBook = XLSX.read(data, { type: 'binary' });
  //     jsonData = workBook.SheetNames.reduce((initial, name) => {
  //       const sheet = workBook.Sheets[name];
  //       initial[name] = XLSX.utils.sheet_to_json(sheet);
  //       return initial;
  //     }, {});
  //     const dataString = JSON.stringify(jsonData);
  //     this.list = jsonData;
  //   };
  //   reader.readAsBinaryString(file);
  //   console.log(this.list);
  // }

  onFileChange(event: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
      // Data will be logged in array format containing objects
      this.list = data;
      console.log(this.list);
    };
  }
}
