export default function mergeSort(dataset: number[]): number[] {
  if (dataset.length > 1) {
    const mid = Math.floor(dataset.length / 2)
    const left = dataset.slice(0, mid)
    const right = dataset.slice(mid)

    mergeSort(left)
    mergeSort(right)

    let i = 0,
      j = 0,
      k = 0

    while (i < left.length && j < right.length) {
      if (dataset[i] < dataset[j]) {
        dataset[k] = dataset[i]
        i++
      } else {
        dataset[k] = dataset[j]
        j++
      }
      k++
    }

    dataset.push(...left)
    dataset.push(...right)
  }
  return dataset
}
