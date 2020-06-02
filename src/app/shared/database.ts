import { BehaviorSubject, Observable } from 'rxjs';

export class GridDatabase<T> {
  dataChange: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  get data(): T[] {
    return this.dataChange.value;
  }
  customSortCallback: Function;

  constructor() {
    let copiedData: T[] = this.data.slice();
    this.dataChange.next(copiedData);
  }
}
