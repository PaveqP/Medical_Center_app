import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitActionsComponent } from './visit-actions.component';

describe('VisitActionsComponent', () => {
  let component: VisitActionsComponent;
  let fixture: ComponentFixture<VisitActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisitActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
