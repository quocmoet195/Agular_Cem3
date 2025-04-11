import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export class User {
  constructor(public name: string, public surname: string, public age: number) {
  }
}

@Component({
  selector: 'app-page3',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  users: User[] = [];
  name = '';
  surname = ''
  age = 0
  addUser() {
    this.users.push(new User(this.name, this.surname, this.age));
    console.log("Added!")
  }
  deleteUser() {
    this.users.pop();
    console.log("Deleted!")
  }
  showUsers() {
    console.log(this.users)
  }
}