import { ApplicationRef, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { first, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-deadline',
  standalone: true,
  imports: [],
  templateUrl: './deadline.component.html',
  styleUrl: './deadline.component.less'
})
export class DeadlineComponent implements OnInit, OnDestroy{
  targetDate = new Date(new Date().getTime() + 8 * 24 * 60 * 60 * 1000);
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';

  private subscription!: Subscription;

  constructor(private applicationRef: ApplicationRef, private cdr: ChangeDetectorRef)
  {
  }

  ngOnInit() {
    if (this.targetDate) {
      this.applicationRef.isStable.pipe(first((isStable) => isStable))
      .subscribe(() => 
        {
          this.subscription = interval(1000).subscribe(() => 
          {
            this.updateCountdownDisplay();
            this.cdr.detectChanges();
          })
        });
    }
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  private stopCountdown() {
    // Ensures the subscription stops when component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateCountdownDisplay() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    // Stop the countdown if the date is reached or passed
    if (distance <= 0) {
      this.days = '00';
      this.hours = '00';
      this.minutes = '00';
      this.seconds = '00';
      this.stopCountdown();
      return;
    }

    // Calculate days, hours, minutes, and seconds remaining
    this.days = this.padZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
    this.hours = this.padZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.minutes = this.padZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    this.seconds = this.padZero(Math.floor((distance % (1000 * 60)) / 1000));
  }

  // Helper to pad single digit numbers with leading zero
  private padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
