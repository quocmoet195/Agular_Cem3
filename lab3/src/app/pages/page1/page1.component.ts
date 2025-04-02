import { Component } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  constructor(private dataService: DataService) {
    console.log(this.dataService.getExampleData());
  }
}
