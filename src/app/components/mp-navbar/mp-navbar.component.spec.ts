import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpNavbarComponent } from './mp-navbar.component';

describe('MpNavbarComponent', () => {
  let component: MpNavbarComponent;
  let fixture: ComponentFixture<MpNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
