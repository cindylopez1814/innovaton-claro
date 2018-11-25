import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcelerometroComponent } from './acelerometro.component';

describe('AcelerometroComponent', () => {
  let component: AcelerometroComponent;
  let fixture: ComponentFixture<AcelerometroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcelerometroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcelerometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
