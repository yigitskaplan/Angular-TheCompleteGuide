import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "../app.component";
import { HeaderComponent } from "../header/header.component";
import { UserComponent } from "./user.component";
import { TasksComponent } from "../tasks/tasks.component";
import { CardComponent } from "../shared/card/card.component";
import { TaskComponent } from "../tasks/task/task.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent, TasksComponent, TaskComponent, NewTaskComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule] // Pipes are included with BrowserModule
})
export class AppModule {}