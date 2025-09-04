import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  // for multiple elements (array of elements) there is ViewChildren

  // @Output() add = new EventEmitter<{ title: string; request: string }>();
  add = output<{ title: string; text: string }>();
  enteredTitle = signal('');
  enteredText = signal('');

  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({ title: this.enteredTitle(), text: this.enteredText() });

    // this.form?.nativeElement.reset();
    this.enteredTitle.set('');
    this.enteredText.set('');
  }
}
