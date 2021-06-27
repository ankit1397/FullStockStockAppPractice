import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSVReadComponent } from './csvread.component';

describe('CSVReadComponent', () => {
  let component: CSVReadComponent;
  let fixture: ComponentFixture<CSVReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSVReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSVReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
