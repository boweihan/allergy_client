/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductSearchService } from './product-search-service.service';

describe('Service: ProductSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSearchService]
    });
  });

  it('should ...', inject([ProductSearchService], (service: ProductSearchService) => {
    expect(service).toBeTruthy();
  }));
});
