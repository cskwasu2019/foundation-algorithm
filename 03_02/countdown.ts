#!/bin/env -S deno run

function countdown(x: number) {
  if (x === 0) {
    console.log('Done!')
    return
  } else {
    console.log(x, '...')
    countdown(x - 1)
  }
}

countdown(5)
