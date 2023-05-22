import {Component} from '@angular/core';
import {Die} from "../../model/enum/die.enum";
import {forkJoin, lastValueFrom} from "rxjs";
import {Model} from "../../app.component";
import {DiceService} from "../../service/dice.service";

@Component({
  selector: 'app-die-roller-health',
  templateUrl: './die-roller-health.component.html',
  styleUrls: ['./die-roller-health.component.css']
})
export class DieRollerHealthComponent {
  model: Model;
  previousStates: Model[] = [];
  Die = Die;
  Number = Number;
  proficiency = 0;
  advantageClass = {index: 0, current: 'input-group-text', cycle: ['input-group-text', 'btn-danger', 'btn-success']};

  constructor(private d: DiceService) {
    this.model = new Model();
    this.previousStates.push(new Model());
    this.model.healcubes = 1;
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
      state = {...this.model, health: updatedhealth, thealth: updatedthealth};
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
      requests = Array(Number(this.model.roll)).fill(null).map(async () => await this.d.rollDie(this.model.die) ?? 0);
      rollsum = await lastValueFrom(forkJoin(requests)).then((values: number[]) => {
        this.model.rollarray = values;
        return values.reduce((accum, next) => accum + next, 0);
      });
    } else {
      requests = Array(2).fill(null).map(async () => await this.d.rollDie(this.model.die) ?? 0);
      rollsum = await lastValueFrom(forkJoin(requests)).then((values: number[]) => {
        this.model.rollarray = values;
        return this.advantageClass.index === 2 ? Math.max(...values) : Math.min(...values);
      });
    }

    const state = {
      ...this.model,
      health: this.previousStates[0].health,
      thealth: this.previousStates[0].thealth,
      roll: rollsum + Number(this.model.proficiency)
    };
    this.previousStates.unshift(state);
    this.updateModel();
  }

  updateModel() {
    this.model = {...this.model};
  }

  async heal() {
    this.model.roll = Math.min(this.model.roll, this.model.healcubes);
    await this.roll();
    this.previousStates[0].health = this.previousStates[1].health + this.previousStates[0].roll;
    this.model.healcubes -= this.previousStates[0].rollarray.length;
  }
}
