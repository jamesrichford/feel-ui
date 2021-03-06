import { Component, Input, Output, ViewChildren, EventEmitter, HostListener, HostBinding } from "angular2/core";
import { NgFor, NgIf, NgClass } from "angular2/common";

@Component({
  selector: "feel-dropdown-item",
  template: `{{item[textPropertyName]}}`
})
export class DropdownItem<TItem> {

  @Input()
  textPropertyName: string;

  @Input()
  item: TItem;
}

@Component({
  selector: "feel-dropdown",
  directives: [ NgIf, NgFor, NgClass, DropdownItem ],
  template: `
    <div *ngIf="!selectedItem" class="placeholder" (click)="showItems()">{{placeholderText}}</div>
    <div *ngIf="selectedItem" class="selected-item" (click)="showItems()">{{selectedItem[textPropertyName]}}</div>
    <div class="item-list" [ngClass]="{ show: _itemsVisible }">
      <feel-dropdown-item *ngFor="#item of items" [item]="item" [textPropertyName]="textPropertyName" (click)="setSelectedItem(item)"></feel-dropdown-item>
    </div>`
})
export class DropdownComponent<TItem> {

  private _itemsVisible: boolean;

  @HostBinding("tabindex")
  private _tabIndex = 0;

  @Input()
  placeholderText: string;

  @Input()
  textPropertyName: string;

  @Input()
  items: Array<TItem>;

  @Input()
  selectedItem: TItem;

  @Output()
  selectedItemChange: EventEmitter<TItem> = new EventEmitter();

  @ViewChildren(DropdownItem)
  itemViews: Array<DropdownItem<TItem>>;

  public setSelectedItem(item: TItem) {
    this.selectedItem = item;
    this.selectedItemChange.emit(this.selectedItem);
    this.hideItems();
  }

  public showItems() {
    this._itemsVisible = true;
  }

  @HostListener("blur", ["$event"])
  private _onBlur(event: FocusEvent) {
    this.hideItems();
  }

  public hideItems() {
    this._itemsVisible = false;
  }

}
