import { TestBed } from '@angular/core/testing';

import { ChatreadService } from './chatread.service';

describe('ChatreadService', () => {
  let service: ChatreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
