import { Injectable } from '@angular/core';
import { Die } from '../model/enum/die.enum';
import { EntropyWebService } from './entropy.web.service';
import { firstValueFrom, min } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  constructor(private entropy: EntropyWebService) {

  }
  public scale(float: number, range?: { min?: number, max?: number }): number {
    range ??= { min: 1, max: 100 };
    range.min ??= 1;
    range.max ??= 100;
    return Math.floor(float * (range.max - range.min)) + range.min;
  }

  public async rollDie(dice: Die): Promise<number | void> {
    let float = 0.0;
    try {
    float = await firstValueFrom(this.entropy.getRandomFloat())
    } catch {
      console.error("server unavailable");
      float = Math.random();
    }
    switch (dice) {
      case Die.D4: return this.scale(float, { max: 4 });
      case Die.D6: return this.scale(float, { max: 6 });
      case Die.D8: return this.scale(float, { max: 8 });
      case Die.D10: return this.scale(float, { max: 10 });
      case Die.D12: return this.scale(float, { max: 12 });
      case Die.D20: return this.scale(float, { max: 20 });
      case Die.D100: default: return this.scale(float)
    }
  }
}

