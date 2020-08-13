import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsereGärtenComponent } from './UnsereGärten.component';

describe('UnsereGärtenComponent', () => {
  let component: UnsereGärtenComponent;
  let fixture: ComponentFixture<UnsereGärtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsereGärtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsereGärtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
