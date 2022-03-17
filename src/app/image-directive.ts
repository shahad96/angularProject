import { Directive, OnInit, HostListener, ElementRef, HostBinding } from "@angular/core";


@Directive({
        selector: '[imageBrightness]'
    })

export class ImageBrightness implements OnInit{
    
    constructor(private elRef: ElementRef){

    }
    ngOnInit(){
        // this.elRef.nativeElement.style.filter = 'brightness(150%)';
        // this.elRef.nativeElement.style.backgroundColor = 'blue';
    }

    @HostBinding('style.filter') brightness: string = 'brightness(100%)'; 
    
    @HostListener('mouseenter') mouseover(eventData: Event){
    // //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);  
    this.brightness = 'brightness(150%)';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
    //     // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red', false, false);
        this.brightness = 'brightness(100%)';  
      }

      
}