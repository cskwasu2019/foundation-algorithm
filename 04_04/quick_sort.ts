export default function quickSort(
  dataset: number[],
  first: number | void,
  last: number | void
): number[] {
  if (first < last) {
    first = first || 0
    last = last || dataset.length - 1

    const pivotIdx = partition(dataset, first, last)

    quickSort(dataset, first, pivotIdx - 1)
    quickSort(dataset, pivotIdx + 1, last)
  }

  return dataset
}

function partition(datavalues: number[], first: number, last: number): number {
  const pivotValue = datavalues[first]

  let lower = first + 1
  let upper = last

  let done = false

  while (!done) {
    while (lower <= upper && datavalues[lower] <= pivotValue) {
      lower++
    }

    while (datavalues[upper] >= pivotValue && upper >= lower) {
      upper++
    }

    if (upper < lower) {
      done = true
    } else {
      const temp = datavalues[lower]
      datavalues[lower] = datavalues[upper]
      datavalues[upper] = temp
    }
  }
  const temp = datavalues[first]
  datavalues[first] = datavalues[upper]
  datavalues[upper] = temp

  return upper
}
