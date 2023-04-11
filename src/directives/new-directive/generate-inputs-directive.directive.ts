import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[generate-inputs]'
})
export class GenerateInputsDirective {

  constructor(private renderer: Renderer2,
    private elementRef: ElementRef) { }

    @Input() set generateInputs(count: number) {
    console.log(count);

    for (let i = 0; i < count; i++) {
      let inp = this.renderer.createElement('input');
      this.renderer.setStyle(inp, "margin",'12px');
      this.renderer.appendChild(this.elementRef.nativeElement,inp);
    }
  }
}

