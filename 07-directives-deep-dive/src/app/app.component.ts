import { Component, computed, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AuthDirective } from "./auth/auth.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, NgIf, AuthDirective],
})
export class AppComponent {
  private isAuthenticated = inject(AuthService);

  isAdmin = computed(() => this.isAuthenticated.activePermission() === 'admin');
}
