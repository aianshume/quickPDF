import { saveAsPDF } from './exportAsPdf'
import { setComponentInLocalStorage } from './templateFunction'

/**
 * function to convert Text with sapce to text with dashes
 * @param text: string
 * @returns Anshu Meena -> anshu-meena
 */
export function spaceToDash(text: string) {
  return text.toLowerCase().replaceAll(' ', '-')
}

/**
 * function to convert Text with sapce to text with dashes
 * @param text: string
 * @returns anshu-meena -> Anshu meena
 */
export function DashToSpace(text: string) {
  return text.replaceAll('-', ' ')
}

/**
 * function to get image from firebase storage bucket
 * @param id: string
 * @param imageName: string
 * return https url form that {id}.jepg
 */
export function getHttpImage(id: string) {
  return `https://firebasestorage.googleapis.com/v0/b/quickpdf-codenanshu.appspot.com/o/${encodeURIComponent(
    `${id}`
  )}?alt=media`
}

/**
 * function to convert cm values to Pixels
 * @param inch: number
 * @returns pixels: number
 */
export function inToPx(inch: number): number {
  const pxPerIn = 96
  return Math.round(inch * pxPerIn)
}

export function inToPt(inch: number): number {
  const ptPrIn = 72
  return Math.round(inch * ptPrIn)
}

export const monthsOfYear: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

// convert one digit number to two digit number
const monthChecker = Intl.NumberFormat('en-US', {
  minimumIntegerDigits: 2
})

/**
 * function to date object to miningful date
 * `date-month-year`
 * @param inch: date object
 * @returns date: string
 */
export const dateToValue = (date: Date) => {
  console.log(date)
  return `${date.getDate()}-${monthChecker.format(date.getMonth() + 1)}-${date.getUTCFullYear()}`
}

/**
 * convert dd-mm-yyyy to date object
 * @param dateString
 * @returns Date object
 */
export function convertToDate(dateString: string): Date {
  const [day, month, year] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}

/**
 * captalize first letter in every word
 * @param str
 * @returns captilize string
 * eg input:"anshu meena" -> output:"Anshu Meena"
 */
export function capitalizeFirstLetters(str: string): string {
  const words = str.split(' ')
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase()
    const restOfWord = word.slice(1)
    return firstLetter + restOfWord
  })
  return capitalizedWords.join(' ')
}

export { saveAsPDF, setComponentInLocalStorage }
