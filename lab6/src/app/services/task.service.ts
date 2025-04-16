import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root' 
})
export class TaskService {
  private tasks: Task[] = [];
  private taskIdCounter = 1; 

  private tasksSubject = new BehaviorSubject<Task[]>([]);

  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  constructor() {
    // this.loadInitialTasks();
    this.tasksSubject.next([...this.tasks]); 
  }

  // getCurrentTasks(): Task[] {
  //   return [...this.tasks]; 
  // }

  addTask(taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): void {
    const now = new Date();
    const newTask: Task = {
      ...taskData,
      id: this.taskIdCounter++,
      createdAt: now,
      updatedAt: now,
      status: taskData.status || 'new' 
    };
    this.tasks.push(newTask);
    this.tasksSubject.next([...this.tasks]);
    console.log('Task added:', newTask);
    console.log('Current tasks:', this.tasks);
  }

  // updateTask(updatedTask: Task): void {
  //   const index = this.tasks.findIndex(task => task.id === updatedTask.id);
  //   if (index !== -1) {
  //     this.tasks[index] = { ...updatedTask, updatedAt: new Date() };
  //     this.tasksSubject.next([...this.tasks]);
  //   }
  // }

  // deleteTask(taskId: number): void {
  //   this.tasks = this.tasks.filter(task => task.id !== taskId);
  //   this.tasksSubject.next([...this.tasks]);
  // }

  // private loadInitialTasks() {
  //   this.tasks = [
  //     { id: this.taskIdCounter++, type: 'task', priority: 'high', status: 'new', title: 'Настроить окружение', reporter: 'Admin', createdAt: new Date(), updatedAt: new Date() },
  //     { id: this.taskIdCounter++, type: 'bug', priority: 'critical', status: 'new', title: 'Исправить ошибку авторизации', description: 'Не работает вход через Google', assignee: 'Dev1', reporter: 'Tester', createdAt: new Date(), updatedAt: new Date() }
  //   ];
  // }
}