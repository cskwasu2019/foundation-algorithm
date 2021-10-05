export default function isSorted(dataset: number[]): boolean {
  //   for (let i = 0; i < dataset.length - 1; i++) {
  //     if (dataset[i] > dataset[i + 1]) {
  //       return false
  //     }
  //   }
  //   return true

  return dataset.reduce(
    (expr, curr, i) => expr && dataset[Math.max(0, i - 1)] <= curr,
    true
  ) as unknown as boolean
}
