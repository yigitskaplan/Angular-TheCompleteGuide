import {
  Component,
  HostBinding,
  HostListener,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  @Input({ required: true }) label!: string;

  // @HostBinding('class') className = 'control'; - same as host: { class: 'control' }
  // @HostListener('click') onClick() {
  //   console.log('Control clicked!');
  // } - same as host: { '(click)': 'onClick()' } also contains onClick() func.

  onClick() {
    console.log('Control clicked!');
  }
}
