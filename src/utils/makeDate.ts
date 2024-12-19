import {en, fr} from "../utils/months"

export const makeDate = (t: string, lang: string) => {
  const createdDate = new Date(t)
  const months = lang === "en" ? en : fr
  const month = months[createdDate.getMonth()]
  const localMonth = lang == "en" ? month : month.toLowerCase() 
  return `${createdDate.getDate()} ${localMonth} ${createdDate.getFullYear()}`
}