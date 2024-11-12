import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankOverviewComponent } from './rank-overview.component';

describe('RankOverviewComponent', () => {
  let component: RankOverviewComponent;
  let fixture: ComponentFixture<RankOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
