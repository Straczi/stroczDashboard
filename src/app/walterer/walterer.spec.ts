import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Walterer } from './walterer';

describe('Walterer', () => {
  let component: Walterer;
  let fixture: ComponentFixture<Walterer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Walterer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Walterer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
