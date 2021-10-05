import { assert } from 'https://deno.land/std/testing/asserts.ts'
import filter from './filter.ts'

function compareArray(a: string[], b: string[]): boolean {
  return a.join(',') === b.join(',')
}

Deno.test('case 1', () => {
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

  assert(
    compareArray(filter(items), ['apple', 'pear', 'orange', 'banana', 'kiwi'])
  )
})
