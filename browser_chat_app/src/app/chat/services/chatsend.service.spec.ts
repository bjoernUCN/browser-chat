import { TestBed } from '@angular/core/testing';

import { ChatsendService } from './chatsend.service';

describe('ChatsendService', () => {
  let service: ChatsendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatsendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
