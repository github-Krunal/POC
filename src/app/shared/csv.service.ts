import { Injectable } from '@angular/core';
import { Angular5Csv } from '../../../node_modules/angular5-csv/dist/Angular5-csv';

@Injectable({
  providedIn: 'root',
})
export class CsvService {
  public csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: false,
    title: '',
    useBom: true,
    noDownload: false,
    headers: [],
  };

  constructor() {}

  public CsvExportFile(headers?: string[], name?: string, data?: any) {
    this.csvOptions.title = name;
    this.csvOptions.headers = headers;
    new Angular5Csv(data, name, this.csvOptions);
  }
}
