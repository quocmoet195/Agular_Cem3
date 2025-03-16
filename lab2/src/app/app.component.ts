import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = ''; 
  greeting: string = ''; 
  showGreeting: boolean = false; 
  greetUser(): void {
    if (this.userName) {
      this.greeting = `Hello, ${this.userName}!`;
      this.showGreeting = true;
    } else {
      this.greeting = 'Please enter your name.';
      this.showGreeting = true;
    }
  }



}
