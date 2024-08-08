import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectInfoComponent } from './suspect-info.component';

describe('SuspectInfoComponent', () => {
  let component: SuspectInfoComponent;
  let fixture: ComponentFixture<SuspectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspectInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuspectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
