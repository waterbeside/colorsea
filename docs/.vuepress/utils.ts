interface kvListItem {
  key: string
  value: string
  [prop: string]: any
}

export const dict2List = (dict: {[key: string]: string}, formatter?: (key, value) => [string, string]): kvListItem[] => {
  const list: kvListItem[] = []
  for (let key in dict) {
    let value = dict[key]
    if (typeof formatter === 'function') {
      [key, value] = formatter(key, value)
    }
    list.push({key, value})
  }
  return list
}