import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryItBodyComponent } from './try-it-body.component';

describe('TryItBodyComponent', () => {
  let component: TryItBodyComponent;
  let fixture: ComponentFixture<TryItBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TryItBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TryItBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
