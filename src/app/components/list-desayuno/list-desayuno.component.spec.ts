import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesayunoComponent } from './list-desayuno.component';

describe('ListDesayunoComponent', () => {
  let component: ListDesayunoComponent;
  let fixture: ComponentFixture<ListDesayunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDesayunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesayunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
