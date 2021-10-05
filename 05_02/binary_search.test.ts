import { assert } from 'https://deno.land/std/testing/asserts.ts'
import binarySearch from './binary_search.ts'

Deno.test('case 1', () => {
  const items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
  assert(binarySearch(23, items) === 4)
})

Deno.test('case 2', () => {
  const items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
  assert(binarySearch(87, items) === 9)
})

Deno.test('case 3', () => {
  const items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]
  assert(binarySearch(250, items) == null)
})
