import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmsComponent } from './dwms.component';

describe('DwmsComponent', () => {
  let component: DwmsComponent;
  let fixture: ComponentFixture<DwmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DwmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
