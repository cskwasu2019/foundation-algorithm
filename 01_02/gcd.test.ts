import { assert } from 'https://deno.land/std/testing/asserts.ts'
import gcd from './gcd.ts'

Deno.test('case 1', () => {
  assert(gcd(60, 96) === 12)
})

Deno.test('case 2', () => {
  assert(gcd(20, 8) === 4)
})
