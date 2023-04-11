import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorChangeDirective]'
})
export class ColorChangeDirectiveDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {

    }
  @HostListener("input", ['$event']) inputValue(e:any) {
    if(!Number.isNaN(Number(e.target.value)) ){
      this.setStyle("green");
    }
    else{
      this.setStyle("red");
    }

}

private setStyle(val: string) {
  this.renderer.setStyle(this.element.nativeElement, "color",val);
}


}
