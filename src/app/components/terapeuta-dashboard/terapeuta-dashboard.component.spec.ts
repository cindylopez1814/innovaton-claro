import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutaDashboardComponent } from './terapeuta-dashboard.component';

describe('TerapeutaDashboardComponent', () => {
  let component: TerapeutaDashboardComponent;
  let fixture: ComponentFixture<TerapeutaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapeutaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapeutaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
