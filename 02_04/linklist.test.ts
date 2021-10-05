import { assert } from 'https://deno.land/std/testing/asserts.ts'
import LinkList from './linklist.ts'

Deno.test('empty list should be zero in length', () => {
  const list = new LinkList()
  assert(list.length === 0)
})

Deno.test('case 1', () => {
  const list = new LinkList()
  list.insert(38)
  list.insert(49)
  list.insert(13)
  list.insert(15)

  assert(list.length === 4)
})

Deno.test('case 2', () => {
  const list = new LinkList()
  list.insert(38)
  list.insert(49)
  list.insert(13)
  list.insert(15)

  assert(list.find(13) != null)
})

Deno.test('case 2', () => {
  const list = new LinkList()
  list.insert(38)
  list.insert(49)
  list.insert(13)
  list.insert(15)

  assert(list.find(78) == null)
})

Deno.test('case 3', () => {
  const list = new LinkList()
  list.insert(38)
  list.insert(49)
  list.insert(13)
  list.insert(15)

  list.deleteAt(3)

  assert(list.length === 3)
})
