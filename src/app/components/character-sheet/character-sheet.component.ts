import { Component } from '@angular/core';
import {CharSheet} from "../../model/charsheet.model";
import {Attributes} from "../../model/enum/attributes.enum";
import {Skills} from "../../model/enum/skills.enum";

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent {
  //sheet: CharSheet;
  attributes = Attributes;
  skills = Skills;

}
