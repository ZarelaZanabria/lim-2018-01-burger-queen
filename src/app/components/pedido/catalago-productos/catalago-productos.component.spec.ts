import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalagoProductosComponent } from './catalago-productos.component';

describe('CatalagoProductosComponent', () => {
  let component: CatalagoProductosComponent;
  let fixture: ComponentFixture<CatalagoProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalagoProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalagoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
