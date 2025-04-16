import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { TaskPriority, TaskStatus, TaskType } from "../../models/task.model";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup; 

  taskTypes: TaskType[] = ['Task', 'Bug'];
  taskPriorities: TaskPriority[] = ['Low', 'Medium', 'High', 'Critical'];
  taskStatuses: TaskStatus[] = ['New', 'In_progress', 'Review', 'Done', 'Rejected'];

  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);

  // constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      type: ['Task', Validators.required], 
      priority: [null],                     
      status: ['New', Validators.required], 
      title: ['', Validators.required],
      description: [''],
      assignee: [''],
      reporter: ['', Validators.required]   
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      console.log('Form Submitted:', this.taskForm.value);
      // Тип Omit<Task, 'id' | 'createdAt' | 'updatedAt'> 
      this.taskService.addTask(this.taskForm.value);
      this.taskForm.reset({
        type: 'Task',
        status: 'New',
        priority: null,
        title: '',
        description: '',
        assignee: '',
        reporter: ''
      });
    } else {
      console.error('Form is invalid');
      this.taskForm.markAllAsTouched();
    }
  }

  get title() { return this.taskForm.get('title'); }
  get type() { return this.taskForm.get('type'); }
  get status() { return this.taskForm.get('status'); }
  get reporter() { return this.taskForm.get('reporter'); }
}