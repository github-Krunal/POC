import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignUpService } from '../account/sign-up/sign-up.service';
import { GridDatabase } from '../../shared/database';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { GridDataSource } from 'src/app/shared/datasource';
import { ExcelService } from 'src/app/shared/excel.service';
import { CsvService } from 'src/app/shared/csv.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public tableList: any[] = [];
  public pendingServiceCount: number;
  public table: any;
  tableListDatabase: GridDatabase<any> | null;
  tableDataSource: GridDataSource<any> | null;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  get tableActionList(): any[] {
    return this.tableListDatabase ? this.tableListDatabase.data : [];
  }

  public list: any[] = [];
  // public dataSources;
  displayedColumns: string[] = ['userId', 'id', 'title'];
  public repositoryFields;
  public database: GridDatabase<any>;
  // dataSource = new MatTableDataSource<any>(this.dataSources);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  constructor(
    private http: HttpClient,
    private service: SignUpService,
    private excelServiceProvider: ExcelService,
    private csvServiceProvider: CsvService
  ) {}

  ngOnInit(): void {
    this.getdata();
    // this.dataSource.paginator = this.paginator;
  }

  getdata() {
    this.service.getcustom().subscribe((res) => {
      this.tableList = res;
      this.tableData();
    });
  }
  getRecord(row) {
    let id = row.id;

    let abc = this.tableList.filter((x) => x.id != id);
    this.tableList = abc;

    this.tableData();
  }
  tableData() {
    this.tableListDatabase = new GridDatabase<any>();
    this.tableDataSource = new GridDataSource(
      this.tableListDatabase,
      this.paginator,
      this.sort
    );
    this.tableListDatabase.dataChange.next(this.tableList);
  }

  exportAsXLSX() {
    this.excelServiceProvider.exportAsExcelFile(this.tableList, 'sample');
  }
  exportAsCsv() {
    let headers = ['no1', 'no2', 'no3'];
    let name = 'Download file';
    let xyz = [];
    this.tableList.forEach((value) => {
      xyz.push({ userID: value.userId, id: value.id, title: value.title });
    });
    console.log(xyz);

    this.csvServiceProvider.CsvExportFile(headers, name, xyz);
  }
}
