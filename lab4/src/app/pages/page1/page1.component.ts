import { Component, OnInit } from '@angular/core';
import { MyPipe } from '../../core/pipes/reverse.pipe';
import { CommonModule } from '@angular/common';
import { DataService, Student } from '../../core/services/data.service'
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-page1',
  imports: [CommonModule, MyPipe],
  standalone: true,
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
  providers: [
    DataService
  ]
})
export class Page1Component implements OnInit {

  students: Student[] = [];

  name = '';
  surname = '';
  age = 0;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getStudents()
      .pipe(
        filter(data => data != null),
        map((data => (data.map(student => ({ ...student, group: student.group + ' 1 курс' })))))
      )
      .subscribe((students) => {
        this.students = students;
        console.log(students);
      })
  }
}
