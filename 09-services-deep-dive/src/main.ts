import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { TasksService } from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent, {
//   providers: [TasksService]
// }).catch((err) => console.error(err));
// Above is the old way of providing a service at the application level
// Now we can provide it directly in the service with providedIn: 'root' - better way

bootstrapApplication(AppComponent).catch((err) => console.error(err));