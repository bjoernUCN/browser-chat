import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatusercountComponent } from './chatusercount.component';

describe('ChatusercountComponent', () => {
  let component: ChatusercountComponent;
  let fixture: ComponentFixture<ChatusercountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatusercountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatusercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
