interface IHyphenateAndLowercase {
  text: string
  hyphenate?: boolean
  lowercase?: boolean
  punctuation?: boolean
}

/**
 * Converts snake_case strings to camelCase
 * Useful for keys from APIs
 * https://matthiashager.com/converting-snake-case-to-camel-case-object-keys-with-javascript
 * @param str catchment_id
 * @returns catchmentId
 */
// Todo: deleted this function, use library instead
export function toCamel(str: string): string {
  return str.replace(/([_][a-z])/gi, (match) => {
    return match.toUpperCase().replace('_', '')
  })
}

/**
 * Takes an object with snake_case keys
 * and returns one with camelCase keys
 *
 * Exceptions override keys (ie. confusing names)
 *
 * @param obj example: { id: 1, catchment_name: 'ABC' }
 * @param exceptions example: { tf: 'trashFire' }
 * @returns example: { id: 1, catchmentName: 'ABC' }
 */
// Todo: deleted this function, use library instead
export function keysToCamel<T = any>(
  obj: Record<string, any>,
  exceptions: Record<string, string> = {}
): T {
  const cameled = {} as T

  Object.keys(obj).forEach((key) => {
    const newKey = exceptions[key] || toCamel(key)
    // @ts-ignore
    cameled[newKey] = obj[key]
  })

  return cameled
}

// Todo: deleted this function, use library instead
export function keysToCamelDeep<T = any>(
  obj: Record<string, any>,
  exceptions: Record<string, string> = {}
): T {
  const cameled = {} as T

  Object.keys(obj).forEach((key) => {
    const newKey = exceptions[key] || toCamel(key)
    // @ts-ignore
    cameled[newKey] = obj[key]
    if (Array.isArray(obj[key])) {
      // Todo: fix this bug, this recursive call returns a map not an array
      // write unit test to fix this
      // @ts-ignore
      cameled[newKey] = obj[key].map((item: any) => keysToCamelDeep(item, exceptions))
    }
    if (typeof obj[key] === 'object') {
      if (obj[key] === null) {
        // @ts-ignore
        cameled[newKey] = obj[key]
      } else {
        // @ts-ignore
        cameled[newKey] = keysToCamelDeep(obj[key], exceptions)
      }
    }
  })

  return cameled
}

// this function compares two dates and tells you the difference in days.
// you can return milliseconds or days by specifying the type returned
export function checkDifferenceBetweenDates(
  lastChecked: number,
  secondCheck: number,
  diffType: 'days' | 'milliseconds'
): number {
  const date1 = lastChecked
  const date2 = secondCheck
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  if (diffType === 'milliseconds') {
    return diffTime
  } else {
    return diffDays
  }
}

/**
 * Munges over data received from ESRI apis and cleans them for the Front End
 *
 * If attributes is used, it will migrate this to properties for consistency
 *
 * 'id' is a special case. Geometry and other things must have an 'id' on the top
 * level of objects
 * Will look for an 'id' field in the properties or an exception that maps to 'id'
 * (like {'catchment_id': 'id'}) and will put this value as an 'id' on the top
 * level. If no id or exception is found, will not set 'id'
 *
 * @param obj { features: [{ [fieldName]: { <keys/values> }, ... }]}
 * ie. { features: [{ attributes: { id: 1, storage_name: 'MyStorage' }}]}
 * @param fieldName 'properties' | 'attributes'
 * @param exceptions pass through to keysToCamel
 * @param flat if false, will return an array of objects with the data under 'properties'
 *             if true, simply returns an array with the data
 * @returns
 * if flat
 * [{ <keys/values> }]
 * if not flat
 * [{ id: <id>, properties: { <keys/values> }}]
 * ie. [{ id: 1, properties: { id: 1, storageName: 'MyStorage' } }]
 */
const defaultCleanApiOptions = { fieldName: 'attributes', exceptions: {}, flat: true }
export function cleanApiData(
  obj: Record<string, any>,
  argOptions: Record<string, any> = {}
): Record<string, any>[] | null {
  const options = { ...defaultCleanApiOptions, ...argOptions }

  if (obj && Array.isArray(obj.features)) {
    const idException = Object.entries(options.exceptions).find(([, v]) => v === 'id')
    const idField = idException ? idException[0] : 'id'
    const features = obj.features.map((entry) => {
      if (!entry[options.fieldName]) {
        throw new Error(`${options.fieldName} does not exist in features`)
      }

      const properties = keysToCamel(entry[options.fieldName], options.exceptions)
      const newEntry = { ...entry }
      if (entry[options.fieldName][idField]) {
        newEntry.id = entry[options.fieldName][idField]
      }

      // delete 'attributes' or 'properties'
      delete newEntry[options.fieldName]

      if (options.flat) {
        return properties
      } else {
        newEntry.properties = properties
        return newEntry
      }
    })

    return features
  }

  return null
}

/**
 * rounds value decimals to a given number of decimal places. Defaults to 2 places
 *
 * 2 => 2
 * 2.456 => 2.46
 * @param num
 * @param places
 * @returns
 */
export function roundDecimal(num: number, places = 2): number | null {
  return Number.isFinite(num) ? Math.round(num * Math.pow(10, places)) / Math.pow(10, places) : null
}

/**
 * Create delay, ie. simulate API call
 */
export function delay(ms: number): Promise<unknown> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function convertValueToPercent(value: number): string {
  return (+value).toFixed(0)
}

// check if negative value return 0 or return number
export function checkNegative(num: number): number {
  if (Math.sign(num) === -1) {
    return 0
  } else {
    return num
  }
}

export function commaMarkUp(value: number): string {
  return (+value).toLocaleString(['en-AU', 'en-US'])
}

export function roundedCommaMarkUp(value: number): string {
  return commaMarkUp(Math.round(+value))
}

export function markUpNum(value: number): string {
  return commaMarkUp(checkNegative(Math.round(+value)))
}

// remove space in front of am/pm
export function removeSpace(dateString: string): string {
  const display = dateString.replace(/\s([ap]m)/, '$1')
  return display
}

// return : 2001-03-30T02:20:00Z numeric values
export function numericUTC(milliseconds: number): string {
  if (milliseconds) {
    const date = new Date(milliseconds).toISOString().substr(0, 10)
    return date
  }

  return ''
}

/**
 *
 * @param milliseconds 1621382400000
 * @param noTime true | false
 * @returns "19 May 2021" | "19 May 2021, 12:00am"
 */
export function UTC(milliseconds: number, noTime = true): string {
  const date = new Date(milliseconds)
  const withTime = date.toLocaleString('en-AU', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
    timeZoneName: 'short',
  })
  const noTimeReturned = date.toLocaleString('en-AU', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  let displayDate = noTime ? noTimeReturned : withTime
  displayDate = removeSpace(displayDate)
  return displayDate
}

export function displayDate(strDate: string, type: 'm-y' | undefined = undefined): string {
  const date = new Date(strDate)
  // for date '2020-12-03'
  // generates "3 December 2020"
  // type can change the display m-y = month and year
  let display = ''
  if (!type) {
    display = date.toLocaleString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      // hour: 'numeric',
      // minute: 'numeric',
    })
  } else if (type === 'm-y') {
    display = date.toLocaleString('en-AU', {
      year: 'numeric',
      month: 'long',
      // day: 'numeric',
      // hour: 'numeric',
      // minute: 'numeric',
    })
  }

  display = removeSpace(display)
  return display
}

/**
 * Takes a string of words (like storage names)
 * and returns a sentence
 * @param strArray ['alpha', 'beta', 'gamma']
 * @returns 'alpha, beta and gamma'
 */
export function concatWithGrammar(strArray: string[]): string {
  return strArray.reduce((str, entry, index) => {
    let connector = ', '
    if (index === 0) {
      connector = ''
    } else if (index === strArray.length - 1) {
      connector = ' and '
    }
    return str + connector + entry
  }, '')
}

/**
 * Takes a string  (like storage names)
 * and returns a hyphenated and lowercase
 * @param str 'Australian Capital Territory'
 * @returns 'australian-capital-territory'
 */

export function hyphenateAndLowercase({
  text,
  hyphenate,
  lowercase,
  punctuation,
}: IHyphenateAndLowercase): string {
  let str = text
  if (!str || str === null) {
    str = ''
  }
  str = str.replace(/\u2013|\u2014/g, '-')
  if (punctuation) {
    str = str.replace(/_/g, '-') // we add this line first to not loose the space of the hyphen
    str = str.replace(/[.,/#!$^&*;:{}=_`~()]/g, '')
  }
  if (hyphenate) {
    str = str.replace(/\s+/g, '-')
  }
  if (lowercase) {
    str = str.toLowerCase()
  }
  return str
}

/**
 * Regular expression to check for lat/long
 * ie. "-36.7, 149.812"
 */
export const latLngRegex = /^-?\d{0,3}\.?\d{0,3}, \d{0,3}\.?\d{0,3}$/

/**
 * Checks an array to see if it's truthy and has more
 * than one item. If either is false, return null
 *
 * @param arr array to be tested (can be falsy or an array)
 * @returns arr|null
 */
export function hasOneOrMore<T>(arr: T): T | null {
  return Array.isArray(arr) && arr.length > 0 ? arr : null
}

/**
 * TODO: May be deprecated
 * Calculates the sum total of a given key for objects in an array
 * @param arr [{ volume: 5 }, { volume: 20 }, { volume: 14 }]
 * @param key 'volume'
 * @returns 39 (5 + 20 + 14)
 */
export function sumTotal(arr: Record<string, any>, key: string): number {
  return arr.reduce(function (acc: number, curr: Record<string, any>) {
    return acc + curr[key]
  }, 0)
}

export function formatInsightValue(args: {
  value: number
  postFix: string
  markUpNumber: boolean
}): string {
  const { value, postFix, markUpNumber } = args
  if (Number.isFinite(value)) {
    return markUpNumber ? `${markUpNum(value)}${postFix}` : `${value}${postFix}`
  } else {
    return '_'
  }
}
