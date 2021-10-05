#!/bin/env -S deno run

type HashTable = {
  [key: string]: number
}

export default function count(items: string[]): HashTable {
  const table: HashTable = {}
  for (const item of items) {
    table[item] = (table[item] || 0) + 1
  }

  return table
}

const items = [
  'apple',
  'pear',
  'orange',
  'banana',
  'apple',
  'orange',
  'apple',
  'pear',
  'banana',
  'orange',
  'apple',
  'kiwi',
  'pear',
  'apple',
  'orange',
]

console.log(count(items))
