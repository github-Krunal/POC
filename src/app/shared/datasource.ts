import { merge as observableMerge, BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { GridDatabase } from './database';

export class GridDataSource<T> extends DataSource<any> {
  constructor(
    private _tableDatabase: GridDatabase<T>,
    private _paginator: MatPaginator,
    private _sort: MatSort
  ) {
    super();
  }

  connect(): Observable<any[]> {
    const displayDataChanges = [
      this._tableDatabase.dataChange,
      this._paginator ? this._paginator.page : null,
      this._sort.sortChange,
    ];

    return observableMerge(...displayDataChanges).pipe(
      map(() => {
        const data = this._tableDatabase.data.slice();
        let filteredData = data;

        if (this._paginator) {
          // Grab the page's slice of data.
          const startIndex =
            this._paginator.pageIndex * this._paginator.pageSize;

          if (this._sort.direction) {
            if (this._tableDatabase.customSortCallback) {
              filteredData = this._tableDatabase.customSortCallback(
                filteredData,
                this._sort.active,
                this._sort.direction
              );
            } else {
              filteredData = this.getSortedData(filteredData);
            }
          }

          return filteredData.splice(startIndex, this._paginator.pageSize);
        } else {
          return filteredData;
        }
      })
    );
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  getSortedData(filteredData: any[]): any[] {
    const data = filteredData;
    if (!this._sort.active || this._sort.direction == '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string | Date = '';
      let propertyB: number | string | Date = '';

      [propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];

      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1)
      );
    });
  }
}
