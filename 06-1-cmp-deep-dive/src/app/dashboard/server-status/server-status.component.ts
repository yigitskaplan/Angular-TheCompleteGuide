import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setTimeout>;

  // constructor() {} - prefer ngOnInit

  ngOnInit() {
    console.log("ON INIT")
   setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999999

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log("AFTER VIEW INIT");
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}

