import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PlayersComponent } from '../players/players.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, PlayersComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.less'
})
export class TeamComponent {
  @Input() league: string = "";
  @Input() teams: any[] = []; // Input property to receive teams data

  selectedTeam: any = null;  

  togglePlayers(team: any): void {
    console.log({team: team});
    this.selectedTeam = this.selectedTeam === team ? null : team;
  }
}
