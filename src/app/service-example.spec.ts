import { TestBed } from '@angular/core/testing';
import { ServiceExample } from './service-example';

describe('ServiceExample', () => {
  let service: ServiceExample;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExample);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
