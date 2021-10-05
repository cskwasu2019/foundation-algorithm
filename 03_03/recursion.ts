export function power(num: number, pwr: number): number {
  if (pwr === 0) {
    return 1
  } else {
    return num * power(num, pwr - 1)
  }
}

export function factorial(num: number): number {
  if (num === 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}
