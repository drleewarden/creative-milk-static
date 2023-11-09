interface ArrayFinderArgs {
  arr: any[]
  id: number | string
  key: string
  deepDive?: number
  key2?: string
  complex?: boolean
}
// remove duplicates from array
// export function removeDuplicates(arr: any[], key: string): any[] {
//   const removeDuplicates = [...new Map(arr.map((item) => [item[key], item])).values()]
//   return removeDuplicates
// }
// combine array and return only one of each item
export function ComplexArrayMerge(arr1: any[], arr2: any[], id: string): any[] {
  // accept array of arrays and combines
  // to remove duplicates use the below example
  // const removeDuplicates1 = removeDuplicates(arr1, id)

  const ids = new Set(arr1.map((d) => d[id]))
  const merged = [...arr1, ...arr2.filter((d) => !ids.has(d[id]))]

  merged.sort((a, b) => {
    return a.sub_catchment_order - b.sub_catchment_order
  })

  const results = merged.filter((merged) => {
    return merged[id] !== null
  })

  return results
}
export function ArrayFinder({
  arr,
  id,
  key,
  deepDive = undefined,
  key2 = undefined,
  complex = undefined,
}: ArrayFinderArgs) {
  const item = arr?.find((item: any) => {
    let arrayObj

    if (!complex && key2 && item[key2] === undefined) {
      // eslint-disable-next-line
      console.error('item does not have ', key2)
    } else if (!deepDive && !complex && item[key] === id) {
      arrayObj = item
    } else if (deepDive === 0 && item[deepDive][key] === id) {
      arrayObj = item
    } else if (complex && key2 && item[key] === id && item[key2] !== null) {
      arrayObj = item
    }

    return arrayObj
  })

  return item ?? null
}
