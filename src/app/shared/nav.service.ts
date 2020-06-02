import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private pageRequestType = new BehaviorSubject<string>(null);
  private pageTitle = new BehaviorSubject<string>(null);
  public requestTypeChange = this.pageRequestType.asObservable();
  public pageTitleChange = this.pageTitle.asObservable();

  upendRequestType(type: string) {
    this.pageRequestType.next(type);
  }

  updatePageTitle(title: string) {
    this.pageTitle.next(title);
  }
}
