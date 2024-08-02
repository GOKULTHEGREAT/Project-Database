import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VOCStatusComponent } from './voc-status.component';

describe('VOCStatusComponent', () => {
  let component: VOCStatusComponent;
  let fixture: ComponentFixture<VOCStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VOCStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VOCStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
