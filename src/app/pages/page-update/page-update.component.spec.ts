import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateComponent } from './page-update.component';

describe('PageUpdateComponent', () => {
  let component: PageUpdateComponent;
  let fixture: ComponentFixture<PageUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageUpdateComponent]
    });
    fixture = TestBed.createComponent(PageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
