import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaConverterComponent } from './temperatura-converter.component';

describe('TemperaturaConverterComponent', () => {
  let component: TemperaturaConverterComponent;
  let fixture: ComponentFixture<TemperaturaConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturaConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
