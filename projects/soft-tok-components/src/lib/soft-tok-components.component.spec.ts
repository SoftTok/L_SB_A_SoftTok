import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftTokComponentsComponent } from './soft-tok-components.component';

describe('SoftTokComponentsComponent', () => {
  let component: SoftTokComponentsComponent;
  let fixture: ComponentFixture<SoftTokComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftTokComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftTokComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
