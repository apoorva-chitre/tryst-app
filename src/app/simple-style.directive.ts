import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSimpleStyle]'
})
export class SimpleStyleDirective implements OnInit{

  constructor( private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.marginTop = '100px';
    this.elementRef.nativeElement.style.backgroundColor = 'white';
    this.elementRef.nativeElement.style.color = 'gray';
  }

}
