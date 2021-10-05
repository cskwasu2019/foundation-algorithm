import { assert } from 'https://deno.land/std/testing/asserts.ts'
import isSorted from './is_sorted.ts'

Deno.test('case 1', () => {
  const items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
  assert(isSorted(items) === true)
})

Deno.test('case 3', () => {
  const items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
  assert(isSorted(items) === false)
})
