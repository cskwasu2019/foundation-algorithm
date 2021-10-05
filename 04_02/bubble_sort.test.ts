import { assert } from 'https://deno.land/std/testing/asserts.ts'
import bubbleSort from './bubble_sort.ts'

function compareArray(a: any[], b: any[]): boolean {
  return a.join(',') === b.join(',')
}

Deno.test('case 1', () => {
  assert(
    compareArray(
      bubbleSort([6, 20, 8, 19, 56, 23, 87, 41, 49, 53]),
      [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
    )
  )
})
