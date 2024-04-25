import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpHeroAnimComponent } from './mp-hero-anim.component';

describe('MpHeroAnimComponent', () => {
  let component: MpHeroAnimComponent;
  let fixture: ComponentFixture<MpHeroAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpHeroAnimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MpHeroAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
