import { Component, ContentChild, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-children-component',
  templateUrl: './children-component.component.html',

})
export class ChildrenComponentComponent implements OnInit {

  constructor(private renderer: Renderer2,
    private elementRef: ElementRef) { }

  ngOnInit() {
  }

  @Input()
  title!: string;
  @ContentChild(HTMLInputElement,
    { read: ViewContainerRef })
  input!: ElementRef<HTMLInputElement>;

  @Input() set readInputs(count: number) {
    console.log(count);

    for (let i = 0; i < count; i++) {
      this.renderer.appendChild(this.elementRef.nativeElement,this.input);
    }
  }
}
