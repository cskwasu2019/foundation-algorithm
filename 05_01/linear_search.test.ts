import { assert } from 'https://deno.land/std/testing/asserts.ts'
import linearSearch from './linear_search.ts'

Deno.test('case 1', () => {
  const items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
  assert(linearSearch(87, items) === 6)
})

Deno.test('case 1', () => {
  const items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
  assert(linearSearch(250, items) == null)
})
