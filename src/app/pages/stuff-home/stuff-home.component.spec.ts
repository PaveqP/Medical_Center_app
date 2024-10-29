import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffHomeComponent } from './stuff-home.component';

describe('StuffHomeComponent', () => {
  let component: StuffHomeComponent;
  let fixture: ComponentFixture<StuffHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StuffHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
