import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutureConsultationsComponent } from './future-consultations.component';

describe('FutureVisitsComponent', () => {
  let component: FutureConsultationsComponent;
  let fixture: ComponentFixture<FutureConsultationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FutureConsultationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FutureConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
