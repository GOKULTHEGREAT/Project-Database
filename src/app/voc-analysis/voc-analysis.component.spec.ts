import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VOCAnalysisComponent } from './voc-analysis.component';

describe('VOCAnalysisComponent', () => {
  let component: VOCAnalysisComponent;
  let fixture: ComponentFixture<VOCAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VOCAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VOCAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
