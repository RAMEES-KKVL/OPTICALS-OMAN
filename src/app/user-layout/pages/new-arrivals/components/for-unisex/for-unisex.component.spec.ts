import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForUnisexComponent } from './for-unisex.component';

describe('ForUnisexComponent', () => {
  let component: ForUnisexComponent;
  let fixture: ComponentFixture<ForUnisexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForUnisexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForUnisexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
