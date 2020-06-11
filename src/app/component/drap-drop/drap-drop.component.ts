import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  moveItemInArray,
  CdkDragDrop,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drap-drop',
  templateUrl: './drap-drop.component.html',
  styleUrls: ['./drap-drop.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DrapDropComponent implements OnInit {
  todo = ['a', 'b', 'c', 'd'];

  done = ['a1', 'a2', 'a3', 'a4', 'a5'];
  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
