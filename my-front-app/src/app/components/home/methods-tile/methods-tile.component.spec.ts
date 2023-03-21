import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsTileComponent } from './methods-tile.component';

describe('MethodsTileComponent', () => {
  let component: MethodsTileComponent;
  let fixture: ComponentFixture<MethodsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodsTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
