import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorBeetComponent } from './sensor-beet.component';

describe('SensorBeetComponent', () => {
  let component: SensorBeetComponent;
  let fixture: ComponentFixture<SensorBeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorBeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorBeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
