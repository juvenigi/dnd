import {Component, ElementRef, ViewChild} from '@angular/core';
import {Die} from './model/enum/die.enum';
import {DiceService} from './service/dice.service';
import {forkJoin, lastValueFrom, reduce} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

}

export class Model {
  healcubes: number = 0;
  die: Die = Die.D20;
  proficiency: number = 0;
  public health: number = 0;
  thealth: number = 0;
  roll: number = 1;
  rollarray: number[] = [];
}

