import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

export class User {
  constructor(public name: string, public age: number, public surname: string) {

  }
}
@Component({
  selector: 'app-page2',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component implements OnInit {
  users: User[] = [];
  constructor(private fb: FormBuilder) {

  }

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl(''),
    age: new FormControl<number | null>(null, [Validators.min(0)])
  });

  addUser() {
    if (this.userForm.valid) {
      const newUser: User = {
        name: this.userForm.value.name ?? '',
        surname: this.userForm.value.surname ?? '',
        age: this.userForm.value.age ?? 0
      };

      this.users.push(newUser);

      console.log('User added:', newUser);
      console.log('Current users:', this.users);

      this.userForm.reset();
    } else {
      console.error('Form is invalid');
      this.userForm.markAllAsTouched();
    }
  }

  removeUser() {
    let index = this.users.length - 1;
    if (index >= 0 && index < this.users.length) {
      this.users.splice(index, 1);
      console.log('Users after removal:', this.users);
    }
  }

  showUsers(){
    console.log('Users',this.users)
  }

  ngOnInit() { }
}


