import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForMenComponent } from './for-men.component';

describe('ForMenComponent', () => {
  let component: ForMenComponent;
  let fixture: ComponentFixture<ForMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForMenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
