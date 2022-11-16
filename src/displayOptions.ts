import { mainColor } from "./theme"

export interface IColors { [key: string]: string }

export const Colors: IColors = {
  commentary: mainColor,
  commentaire: mainColor,
  translation_note: "rgb(68, 187, 153)",
  contexte_historique:"rgb(119, 170, 221)", 
  historical_context: "rgb(119, 170, 221)",
  référence_culturelle: "rgb(238, 136, 102)", 
  cultural_reference: "rgb(238, 136, 102)",
}
