import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForWomenComponent } from './for-women.component';

describe('ForWomenComponent', () => {
  let component: ForWomenComponent;
  let fixture: ComponentFixture<ForWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForWomenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
