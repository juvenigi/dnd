import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AttributeName} from "../../model/attribute-name";
import {Attributes} from "../../model/enum/attributes.enum";

@Component({
  selector: 'app-attribute-box',
  templateUrl: './attribute-box.component.html',
  styleUrls: ['./attribute-box.component.css']
})
export class AttributeBoxComponent {

  @Input() attribute = Attributes.STR;
  displayAttribute = '';

  group = new FormGroup({
    value: new FormControl<number>(0, {nonNullable: true}),
    modValue: new FormControl<number>(-5, {nonNullable: true})
  });
  AttributeName = AttributeName;
  constructor() {

    this.group.controls['value'].valueChanges.subscribe(value => this.updateMod(value));
    this.group.controls['modValue'].valueChanges.subscribe(value => this.updateVal(value));
  }
  ngOnInit() {
  //  this.displayAttribute = AttributeName[this.attribute];
  }

  addToControl(value: number) {
    const update = this.group.controls['value'].value + value;
    this.group.controls['value'].setValue(update);
  }

  updateMod(value: number) {
    const converted = Math.floor((value - 10) / 2);
    this.group.controls['modValue'].setValue(converted, {emitEvent: false});
  }

  updateVal(value: number) {
    const converted = value * 2 + 10;
    this.group.controls['value'].setValue(converted, {emitEvent: false});
  }
}
