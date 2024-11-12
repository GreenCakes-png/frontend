import { Component } from '@angular/core';
import { DashboardComponent } from '../../component/dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
