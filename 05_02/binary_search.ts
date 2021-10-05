export default function binarySearch(
  item: any,
  itemList: any[]
): number | undefined {
  const listSize = itemList.length - 1

  let lowerIdx = 0,
    upperIdx = listSize

  while (lowerIdx <= upperIdx) {
    const mid = Math.floor((lowerIdx + upperIdx) / 2)
    if (item === itemList[mid]) {
      return mid
    } else if (item > itemList[mid]) {
      lowerIdx = mid + 1
    } else {
      upperIdx = mid - 1
    }
  }
}
