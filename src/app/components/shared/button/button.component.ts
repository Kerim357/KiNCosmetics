import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
 
    @Input() label: string = 'Submit';
    @Input() disabled: boolean = false;
    @Input() fab: boolean = false;
    @Input() hasIcon: boolean = false;
    @Input() rounded: boolean = false;
    @Input() isLink: boolean = false;
    @Input() isSelected: boolean = false;
    @Output() clickEvent = new EventEmitter();
  
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    onClick() {
      this.clickEvent.emit();
    }
  
  
}
