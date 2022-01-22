import { Directive, ElementRef, HostListener, Input } from "@angular/core";




@Directive({
selector:'[highlight]'
})
export class Highlights{
  @Input("highlight") highlightcolor;
  constructor(public elementRef:ElementRef){
  }
  @HostListener("mouseover")mouse1(){
    this.elementRef.nativeElement.style.color=this.highlightcolor;
  }
  @HostListener("mouseleave")mouse2(){
    this.elementRef.nativeElement.style.color="blue";
  }
}