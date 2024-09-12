export function slugify(text:string) {
  return text.toLowerCase()
    .replace(/<[^>]+>/g, '') // remove html tags
    .replace(/ /g,'-') // spaces become -
    .replace(/-+/g, '-') // no repeated -
    .replace(/[^\p{L}-]+/gu,'') // remove all non word or - characters. TODO: this only saves ASCII characters!
}