import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelTojsonComponent } from './excel-tojson.component';

describe('ExcelTojsonComponent', () => {
  let component: ExcelTojsonComponent;
  let fixture: ComponentFixture<ExcelTojsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelTojsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelTojsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
