import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Skills} from "../../model/enum/skills.enum";

@Component({
  selector: 'app-skill-checkbox',
  templateUrl: './skill-checkbox.component.html',
  styleUrls: ['./skill-checkbox.component.css']
})
export class SkillCheckboxComponent {

  @Input() name = Skills.Investigation;
  value = new FormControl<number>(0, {nonNullable:true});
  mastered = new FormControl<boolean>(false, {nonNullable:true})


}
