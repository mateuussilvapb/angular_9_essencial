import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnChanges {

  @Input('myForEm') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
    console.log(this.numbers);
  }

}
