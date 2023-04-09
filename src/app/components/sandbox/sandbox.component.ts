import { Component } from '@angular/core';
import { Die } from 'src/app/model/enum/die.enum';
import { DiceService } from 'src/app/service/dice.service';
import { EntropyWebService } from 'src/app/service/entropy.web.service';

@Component({
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent {
  title = 'deckimg-tts-ui';
  action: number = 1;
  randomFloat: number = 0.;
  processing: boolean | null = null;
  Die = Die;
  d6value = 1;
  d20value = 1;


  constructor(
    private entropyService: EntropyWebService,
    private d: DiceService
  ) { }

  public async onPress() {
    this.processing = true

    await setTimeout(() => {
      this.processing = null;
      this.getRandomNumber();
      ; //hack
    }, 800);
  }

  async later(milis: number) {
    return new Promise(resolve => setTimeout(resolve, milis));
  }

  public async roll(die: Die): Promise<void> {
    this.processing = true;
    let value: number = await this.d.rollDie(die) ?? 0;
    switch (die) {
      case Die.D6: this.d6value = value; break;
      case Die.D20: default: this.d20value = value; break;
    }
    await this.later(800);
    this.processing = null;
    //await setTimeout( ()=> this.processing = null, 800);
  }

  async getRandomNumber() {
    this.entropyService.getRandomFloat().subscribe({
      next: (result) => {
        this.randomFloat = result;
      },
      error: (err) => {
        console.log("something wrong happened");
      }
    });
  }
}
