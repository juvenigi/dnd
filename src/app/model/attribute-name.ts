import {Attributes} from "./enum/attributes.enum";

export const AttributeName: Record<Attributes,string> = {
  [Attributes.STR]: "Strength",
  [Attributes.DEX]: "Dexterity",
  [Attributes.CON]: "Constitution",
  [Attributes.INT]: "Intelligence",
  [Attributes.WIS]: "Wisdom",
  [Attributes.CHA]: "Charisma",
}
