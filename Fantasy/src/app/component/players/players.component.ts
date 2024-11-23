import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.less'
})
export class PlayersComponent implements OnInit {
  @Input() league: string = '';  // League name passed from parent
  @Input() team: string = '';    // Team name passed from parent

  players: any[] = [];          // Array to hold players
  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    console.log({team: this.team, league: this.league});
    if (this.league && this.team) {
      this.loadPlayers();
    }
  }

  loadPlayers(): void {
    this.playerService.getPlayers(this.league, this.team).subscribe(
      (data) => {
        this.players = data;  // Assign the fetched players to the players array
        console.log(data);
      },
      (error) => {
        console.error('Error fetching players', error);
      }
    );
  }
}
