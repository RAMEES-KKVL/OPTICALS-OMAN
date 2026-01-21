import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForKidsComponent } from './for-kids.component';

describe('ForKidsComponent', () => {
  let component: ForKidsComponent;
  let fixture: ComponentFixture<ForKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForKidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
