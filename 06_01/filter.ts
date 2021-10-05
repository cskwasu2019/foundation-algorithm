type HashTable = {
  [key: string]: undefined
}

export default function filter(items: string[]): string[] {
  const table: HashTable = {}
  for (const item of items) {
    table[item] = undefined
  }

  return Object.keys(table)
}
