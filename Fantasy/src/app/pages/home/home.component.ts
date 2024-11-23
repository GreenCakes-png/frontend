import { Component } from '@angular/core';
import { DashboardComponent } from '../../component/dashboard/dashboard.component';
import { LeagueComponent } from '../../component/league/league.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent, LeagueComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
