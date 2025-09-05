import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  // private tasksService = TasksService;

  // constructor(tService: TasksService) {
  //   this.tasksService = tService;
  // } - or use this shorthand:
  constructor(private tasksService: TasksService) {}

  onAddTask(title: string, description: string) {
    this.formEl()?.nativeElement.reset();
  }
}
