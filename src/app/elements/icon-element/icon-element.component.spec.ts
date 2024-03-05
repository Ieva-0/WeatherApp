import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconElementComponent } from './icon-element.component';

describe('IconElementComponent', () => {
  let component: IconElementComponent;
  let fixture: ComponentFixture<IconElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
