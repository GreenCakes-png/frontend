import { Component } from '@angular/core';
import { GameweekComponent } from '../gameweek/gameweek.component';
import { ChartComponent } from '../chart/chart.component';
import { PlayerMvpsComponent } from '../player-mvps/player-mvps.component';
import { RankOverviewComponent } from '../rank-overview/rank-overview.component';
import { DeadlineComponent } from '../deadline/deadline.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GameweekComponent, ChartComponent, PlayerMvpsComponent, RankOverviewComponent, DeadlineComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {

}
