import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[app-highlighter]'
})

export class HighLighter{
    constructor(elref : ElementRef){
        elref.nativeElement.style.background='#e95620';
        elref.nativeElement.style.color='white';
    }
}

