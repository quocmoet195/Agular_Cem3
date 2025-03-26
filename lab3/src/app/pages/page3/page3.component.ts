import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  imports: [],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  constructor(private router: Router) { }

  goToPage2() {
    this.router.navigate(['/page2']);
    this.router.navigate(['/page2'], { queryParams: { param1: 'value1', param2: 'value2' } });
    this.router.navigate(['/page2'], { fragment: 'my-section' });

  }
  goMain() {
    this.router.navigate(['/']);
  }
}
