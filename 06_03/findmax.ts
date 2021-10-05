export default function findmax(dataset: number[]): number {
  //   if (dataset.length === 1) {
  //     return dataset[0]
  //   }

  //   const op1 = dataset[0]
  //   const op2 = findmax(dataset.slice(1))

  //   if (op1 > op2) {
  //     return op1
  //   } else {
  //     return op2
  //   }

  return dataset.reduce((max, cur) => (cur >= max ? cur : max), dataset[0])
}
