import { assert } from 'https://deno.land/std/testing/asserts.ts'
import { power, factorial } from './recursion.ts'

Deno.test('power case 1', () => {
  assert(power(5, 3) === 125)
})

Deno.test('power case 2', () => {
  assert(power(1, 5) === 1)
})

Deno.test('factorial case 1', () => {
  assert(factorial(4) === 24)
})

Deno.test('factorial case 2', () => {
  assert(factorial(0) === 1)
})
