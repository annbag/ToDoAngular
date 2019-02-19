import {
  Directive,
  HostListener,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {
  @Input()
  private date: Date;
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event) {
    // console.log(this.date);
    this.paragraph.innerHtml = this.date.toLocaleDateString;
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event) {
    // console.log(this.date);
    this.paragraph.innerHtml = this.date.toLocaleDateString;
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}
