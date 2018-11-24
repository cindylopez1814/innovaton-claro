import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaUserComponent } from './mapa-user.component';

describe('MapaUserComponent', () => {
  let component: MapaUserComponent;
  let fixture: ComponentFixture<MapaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
