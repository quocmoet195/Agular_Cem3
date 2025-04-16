import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Injectable({providedIn: 'root'})

@Pipe({
  name: 'myPipe'
})
export class MyPipe implements PipeTransform {

    transform(value: string, param: string): string {
        return `${value} My name is ${param}`;
      }

}
