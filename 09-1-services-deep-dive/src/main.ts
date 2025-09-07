import { bootstrapApplication } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service';

export const TasksServiceToken = new InjectionToken<TasksService>('TasksServiceToken');

bootstrapApplication(AppComponent, {
  providers: [{ provide: TasksServiceToken, useClass: TasksService }],
}).catch((err) => console.error(err));
// Above is the old way of providing a service at the application level
// Now we can provide it directly in the service with providedIn: 'root' - better way

// bootstrapApplication(AppComponent).catch((err) => console.error(err));