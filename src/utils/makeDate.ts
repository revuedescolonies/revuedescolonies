import {en, fr} from "../utils/months"

export const makeDate = (t: string, lang: string) => {
  const createdDate = new Date(t)
  const months = lang === "en" ? en : fr
  return `${createdDate.getDate()} ${
    months[createdDate.getMonth()]
  } ${createdDate.getFullYear()}`
}