import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationBodyComponent } from './documentation-body.component';

describe('DocumentationBodyComponent', () => {
  let component: DocumentationBodyComponent;
  let fixture: ComponentFixture<DocumentationBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentationBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
