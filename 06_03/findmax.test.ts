import { assert } from 'https://deno.land/std/testing/asserts.ts'
import findmax from './findmax.ts'

Deno.test('case 1', () => {
  const items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
  assert(findmax(items) === 87)
})
