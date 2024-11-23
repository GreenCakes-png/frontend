import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [CommonModule, TeamComponent],
  templateUrl: './league.component.html',
  styleUrl: './league.component.less'
})
export class LeagueComponent implements OnInit {
  leagues: any[] = [];

  constructor(private leagueService: LeagueService) {}

  ngOnInit(): void {
    this.fetchLeagues();
  }

  fetchLeagues(): void {
    this.leagueService.getLeagues().subscribe(
      (data) => {
        console.log(data);
        this.leagues = data;
      },
      (error) => console.error('Error fetching leagues', error)
    );
  }

  selectedLeague: any = null;  // Store the currently selected league

  toggleTeams(league: any): void {
    // Toggle the selected league
    this.selectedLeague = this.selectedLeague === league ? null : league;
  }
}
