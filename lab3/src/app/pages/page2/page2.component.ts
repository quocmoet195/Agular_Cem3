import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  constructor(private router: Router) { }

  goToPage3() {
    this.router.navigateByUrl('/page3');
  }
} 
