import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsListComponent } from './visits-list.component';

describe('VisitsListComponent', () => {
  let component: VisitsListComponent;
  let fixture: ComponentFixture<VisitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisitsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
