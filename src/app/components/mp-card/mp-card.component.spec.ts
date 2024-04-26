import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpCardComponent } from './mp-card.component';

describe('MpCardComponent', () => {
  let component: MpCardComponent;
  let fixture: ComponentFixture<MpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
