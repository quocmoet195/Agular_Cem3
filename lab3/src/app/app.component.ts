import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'lab3';
  greeting = "";

  ngOnInit(): void {
    console.log('Я родился!');
  }

  onSayHi(): void {
    alert("Привет, " + this.greeting);
  }
}
