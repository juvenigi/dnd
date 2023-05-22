import {Attributes} from "./enum/attributes.enum";

export interface CharSheet {

  identity: {
    name: string;
    class: string; // TODO enum?
    backstoryShort: string;
    playerName: string;
  }

  roleplay: {
    personalityTraits: string;
    ideals: string;
    bonds: string;
    flaws: string;
    backstory: string;
    features: string;
    optProficiencies: string;
    languages: string;
    allies: Array<string | CharSheet>;
    emblem: {
      icon?: File;
      name: string;
    }
  }

  miscStats: {
    inspiration: number;
    exp: number;
    armor: number;
    initiative: number;
    speed: number;
    health: {
      hpDice: number;
      diceQuality: string;
      hp: number;
      thp: number;
      hpmax: number;
    }
  }

  proficiency: {
    save: {
      con: boolean;
      str: boolean;
      dex: boolean;
      int: boolean;
      wis: boolean;
      cha: boolean;
    }
    skills: {
      acrobatDex: boolean;
      animalWis: boolean;
      arcanaInt: boolean;
      athletStr: boolean;
      deceptCha: boolean;
      histInt: boolean;
      insightWis: boolean;
      intimidCha: boolean;
      investiInt: boolean;
      medicineWis: boolean;
      natureInt: boolean;
      percWis: boolean;
      perfCha: boolean;
      persuCha: boolean;
      religionInt: boolean;
      handDex: boolean;
      stealthDex: boolean;
      survivalWis: boolean;
      passiveWis: boolean;
    }
  }

  attributes: Record<Attributes,number>

  spells: [{ level: number, prepared: boolean, name: string, description: string }]

  equipment: {
    goldStash: Array<[string, number]>;
    equipped: string; // atk bonus, damage type?
    stashed: string;
  }
}
