import { Component, Input, HostListener, HostBinding, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "feel-checkbox",
    template: `<svg [ngClass]="{ 'checked': checked }" width="20px" height="20px">
                  <rect x="1" y="1" width="16px" height="16px"></rect>
                  <path d="M 4 6 l 6 6 l 12 -12"></path>
               </svg>
               <label>{{label}}</label>`
})
export class CheckboxComponent {

   @HostBinding("tabindex")
   tabIndex = 0;

   @Input()
   checked: boolean;

   @Output()
   checkedChange = new EventEmitter();

   @Input()
   label: string;

   @Input()
   @HostBinding("attr.disabled")
   disabled: boolean;

   @HostListener("keypress", ["$event"])
   _onKeyPress(event: KeyboardEvent) {
      if (event.charCode === 13 || event.charCode === 32 ) {
         this._toggleClicked();
      }
   }

   @HostListener("click")
     _toggleClicked() {
        if(!this.disabled) {
          this.checked = !this.checked;
          this.checkedChange.emit(this.checked);
       }
     }
 }
