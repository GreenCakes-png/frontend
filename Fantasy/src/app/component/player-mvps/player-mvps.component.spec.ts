import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerMvpsComponent } from './player-mvps.component';

describe('PlayerMvpsComponent', () => {
  let component: PlayerMvpsComponent;
  let fixture: ComponentFixture<PlayerMvpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerMvpsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerMvpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
