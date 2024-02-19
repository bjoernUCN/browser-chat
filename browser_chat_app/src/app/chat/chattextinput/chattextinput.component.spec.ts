import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChattextinputComponent } from './chattextinput.component';

describe('ChattextinputComponent', () => {
  let component: ChattextinputComponent;
  let fixture: ComponentFixture<ChattextinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChattextinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChattextinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
