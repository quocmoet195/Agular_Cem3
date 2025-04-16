import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; 
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>; 

  private taskService = inject(TaskService);
  // constructor(private taskService: TaskService) {}

  constructor() {
    this.tasks$ = this.taskService.tasks$; 
  }

  ngOnInit(): void {
  }

  getPriorityClass(priority?: string): string {
     switch(priority) {
       case 'critical': return 'priority-critical';
       case 'high': return 'priority-high';
       case 'medium': return 'priority-medium';
       case 'low': return 'priority-low';
       default: return '';
     }
  }

   getStatusClass(status?: string): string {
     switch(status) {
       case 'new': return 'status-new';
       case 'in_progress': return 'status-in-progress';
       case 'review': return 'status-review';
       case 'done': return 'status-done';
       case 'rejected': return 'status-rejected';
       default: return '';
     }
   }
}