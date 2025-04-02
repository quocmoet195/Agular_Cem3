import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[italic]'
})
export class ItalicDirective {
  constructor(private ref: ElementRef) {
    this.ref.nativeElement.style.fontStyle = 'italic';
  }
}
