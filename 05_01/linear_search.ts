export default function linearSearch(
  item: any,
  itemList: any[]
): number | undefined {
  for (let i = 0; i < itemList.length; i++) {
    if (item === itemList[i]) {
      return i
    }
  }
}
