import {en, fr} from "../utils/months"

export const makeDate = (t: string, lang: string) => {
  const createdDate = new Date(t)
  const months = lang === "en" ? en : fr
  const month = months[createdDate.getUTCMonth()]
  const localMonth = lang == "en" ? month : month.toLowerCase() 
  return `${createdDate.getUTCDate()} ${localMonth} ${createdDate.getUTCFullYear()}`
}