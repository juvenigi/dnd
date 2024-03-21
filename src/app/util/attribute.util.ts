import {Attributes} from "../model/enum/attributes.enum";
import {Skills} from "../model/enum/skills.enum";

export class AttributeUtil {
  static SkillsMap = {
    [Skills.Acrobatics]: Attributes.DEX,
    [Skills.AnimalHandling]: Attributes.WIS,
    [Skills.Arcana]: Attributes.INT,
    [Skills.Athletics]: Attributes.STR,
    [Skills.Deception]: Attributes.CHA,
    [Skills.History]: Attributes.INT,
    [Skills.Insight]: Attributes.WIS,
    [Skills.Intimidation]: Attributes.CHA,
    [Skills.Investigation]: Attributes.INT,
    [Skills.Medicine]: Attributes.WIS,
    [Skills.Nature]: Attributes.INT,
    [Skills.Perception]: Attributes.WIS,
    [Skills.Performance]: Attributes.CHA,
    [Skills.Persuasion]: Attributes.CHA,
    [Skills.Religion]: Attributes.INT,
    [Skills.SleightOfHand]: Attributes.DEX,
    [Skills.Stealth]: Attributes.DEX,
    [Skills.Survival]: Attributes.WIS,
    [Skills.PassiveINS]: Attributes.WIS,
    [Skills.PassiveINV]: Attributes.INT,
    [Skills.PassivePERC]: Attributes.WIS
  };

  static AbilityFactors = {
    [Attributes.WIS]: {
      [Attributes.WIS]: [10, 2],
      [Skills.AnimalHandling]: [0, 1],
      [Skills.Perception]: [0, 1],
      [Skills.Proficiency]: [0, 1]
    }
  }
  // passive attributes have special interactions: advantage -> +5 to passive (converse for disadvantage)
  // second interaction: bonus to active = bonus to passive (but doesn't affect the Attribute)
  // so in general, the bonuses follow a tree structure: child inherits from parent but not vice-versa.
  static AttributeMap = new Map<Attributes, number[]>([[
    Attributes.WIS, [10,]
  ]]);

  static convert(input: Map<Attributes|Skills, number>, output: Attributes) {
    // const values = Object.keys(input).map(key => key in Attributes? input[Attributes[key]] : this.SkillsMap[key])
const values = Array.from(input.keys()).filter(key => (key as any) instanceof Attributes)
  }
}
