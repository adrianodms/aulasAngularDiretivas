import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //console.log(elementRef);
    //this.elementRef.nativeElement.style.backgroundColor = "yellow";

    renderer.setElementStyle(elementRef.nativeElement, 'backgroundColor', 'yellow');
  }
}
