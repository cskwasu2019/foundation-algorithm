export default function gcd(a: number, b: number): number {
  while (b !== 0) {
    const t = a
    a = b
    b = t % b
  }
  return a
}
