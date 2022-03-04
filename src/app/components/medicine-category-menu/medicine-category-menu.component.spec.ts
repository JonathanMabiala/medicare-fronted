import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineCategoryMenuComponent } from './medicine-category-menu.component';

describe('MedicineCategoryMenuComponent', () => {
  let component: MedicineCategoryMenuComponent;
  let fixture: ComponentFixture<MedicineCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineCategoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
