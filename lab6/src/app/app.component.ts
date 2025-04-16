import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from './pages/task-form/task-form.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Лабораторная работа №6';
}