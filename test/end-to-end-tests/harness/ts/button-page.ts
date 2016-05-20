import { Component } from "angular2/core";
import { ButtonComponent, NotificationProvider } from "feel-ui/feel-ui";
@Component({
    directives: [ ButtonComponent ],
    selector: "button-page",
    template: `<h1>Buttons</h1>
               <feel-button [flat]="false" [text]="'raised'"></feel-button>
               <feel-button [flat]="true" [text]="'flat'" (click)=onClick()></feel-button>
               <feel-button [flat]="false" [primary]="true" [text]="'primary raised'"></feel-button>
               <feel-button [flat]="true" [primary]="true" [text]="'primary flat'" (click)=onClick()></feel-button>`
})
export class ButtonPage {

   onClick() {
     console.log("clicked");

     new NotificationProvider().showSuccess("test", "ing");
   }
}
