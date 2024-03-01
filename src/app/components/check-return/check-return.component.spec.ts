import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckReturnComponent } from './check-return.component';

describe('CheckReturnComponent', () => {
  let component: CheckReturnComponent;
  let fixture: ComponentFixture<CheckReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
