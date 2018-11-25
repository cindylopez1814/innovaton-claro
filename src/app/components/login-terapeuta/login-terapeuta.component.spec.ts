import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTerapeutaComponent } from './login-terapeuta.component';

describe('LoginTerapeutaComponent', () => {
  let component: LoginTerapeutaComponent;
  let fixture: ComponentFixture<LoginTerapeutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTerapeutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
