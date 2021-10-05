import { assert } from 'https://deno.land/std/testing/asserts.ts'
import mergeSort from './merge_sort.ts'

function compareArray(a: any[], b: any[]): boolean {
  return a.join(',') === b.join(',')
}

Deno.test('case 1', () => {
  compareArray(
    mergeSort([6, 20, 8, 19, 56, 87, 41, 49, 53]),
    [6, 8, 19, 20, 41, 49, 53, 56, 87]
  )
})

Deno.test('case 2', () => {
  compareArray(
    mergeSort([20, 6, 8, 53, 23, 87, 42, 19]),
    [20, 6, 8, 53, 23, 87, 42, 19]
  )
})
