import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMutipleGridComponent } from './add-mutiple-grid.component';

describe('AddMutipleGridComponent', () => {
  let component: AddMutipleGridComponent;
  let fixture: ComponentFixture<AddMutipleGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMutipleGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMutipleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
