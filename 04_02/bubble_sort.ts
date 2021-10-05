export default function bubbleSort(dataset: number[]): number[] {
  for (let i = dataset.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (dataset[j] > dataset[j + 1]) {
        const temp = dataset[j]
        dataset[j] = dataset[j + 1]
        dataset[j + 1] = temp
      }
    }
  }
  return dataset
}
