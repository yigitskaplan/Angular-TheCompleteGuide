import { Component, input, output, signal } from '@angular/core';

import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  //ticket = input.required<Ticket>({alias: 'data'}); - in component this atribute is called as "ticket" but outside "data" can be used
  //data = input.required<Ticket>({transform: (value) => value}); - for cleanup work
  data = input.required<Ticket>();
  close= output();
  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
    // this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
