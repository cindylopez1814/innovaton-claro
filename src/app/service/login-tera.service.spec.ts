import { TestBed } from '@angular/core/testing';

import { LoginTeraService } from './login-tera.service';

describe('LoginTeraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginTeraService = TestBed.get(LoginTeraService);
    expect(service).toBeTruthy();
  });
});
