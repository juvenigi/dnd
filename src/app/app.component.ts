import { Component, ElementRef, ViewChild } from '@angular/core';
import { EntropyWebService } from './service/entropy.web.service';
import { Die } from './model/enum/die.enum';
import { DiceService } from './service/dice.service';
import { forkJoin, lastValueFrom, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  model: Model;
  previousStates: Model[] = [];
  Die = Die;
  Number = Number;
  proficiency: number = 0;
  advantageClass = { index: 0, current: 'btn-outline-secondary', cycle: ['btn-outline-secondary', 'btn-danger', 'btn-success'] };

  constructor(private d: DiceService) {
    this.model = new Model();
    this.previousStates.push(new Model());
  }

  toggleAdv() {
    this.advantageClass.index = (this.advantageClass.index + 1) % 3;
    console.log(this.advantageClass.index);
    this.advantageClass.current = this.advantageClass.cycle[this.advantageClass.index];
  }

  incrementHp(isPositive: boolean, value: number = 0) { //TODO
    let state: Model;
    if (isPositive) {
      state = {
        ...this.model,
        health: this.model.health + this.previousStates[0].health,
        thealth: this.model.thealth + this.previousStates[0].thealth
      };
    } else {
      let toSubtract = this.model.health + this.model.thealth;
      let diff = this.previousStates[0].thealth - toSubtract;
      let updatedthealth = Math.max(0, diff);
      toSubtract = Math.max(0, -diff);
      let updatedhealth = this.previousStates[0].health - toSubtract;
      state = { ...this.model, health: updatedhealth, thealth: updatedthealth };
    }
    console.log(state);
    this.previousStates.unshift(state);
    this.updateModel();
  }

  setHp(value: number, tvalue: number) {
    this.model.health = value;
    this.model.thealth = tvalue;
    this.previousStates.unshift(this.model);
    this.model = new Model();
  }

  async roll() {
    console.log("rolling: " + this.model.roll + " " + this.model.die + " " + this.proficiency);
    let requests: Array<Promise<number>>;
    let rollsum: number;
    if (this.advantageClass.index === 0) {
      requests = await Array(Number(this.model.roll)).fill(null).map(async () => await this.d.rollDie(this.model.die) ?? 0);
      rollsum = await lastValueFrom(forkJoin(requests)).then((values: number[]) => {
        this.model.rollarray = values;
        return values.reduce((accum, next) => accum + next, 0);
      });
    } else {
      requests = await Array(2).fill(null).map(async () => await this.d.rollDie(this.model.die) ?? 0);
      rollsum = await lastValueFrom(forkJoin(requests)).then((values: number[]) => {
        this.model.rollarray = values;
        return this.advantageClass.index === 2 ? Math.max(...values) : Math.min(...values);
      });
    }

    let state = { ...this.model, roll: rollsum + Number(this.model.proficiency) };
    this.previousStates.unshift(state);
    this.updateModel();
  }

  updateModel() {
    let copy = {...this.model}
    this.model = new Model();
    this.model.health = copy.health;
    this.model.thealth = copy.thealth;
    this.model.proficiency = copy.proficiency;
    this.model.die = copy.die;
    this.model.healcubes = copy.healcubes;
  }

  async heal() {
    await this.roll();
    this.previousStates[0].health = this.previousStates[1].health + this.previousStates[0].rollarray.reduce((sum,iter)=>sum+iter,0);
    this.model.healcubes -= this.previousStates[0].rollarray.length;
  }
}

export class Model {
  healcubes: number  = 0;
  die: Die = Die.D20;
  proficiency: number = 0;
  public health: number = 0;
  thealth: number = 0;
  roll: number = 1;
  rollarray: number[] = [];
}

