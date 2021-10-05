class Node {
  public data: any
  public next: Node | undefined

  constructor(data: any) {
    this.data = data
  }
}

export default class LinkList {
  private head: Node | undefined
  private __count: number = 0

  get length() {
    return this.__count
  }

  constructor(head: Node | undefined = undefined) {
    this.head = head
  }

  insert(data: any) {
    const node = new Node(data)
    node.next = this.head
    this.head = node
    this.__count++
  }

  deleteAt(idx: number) {
    let prevNode: Node | undefined
    let node = this.head
    while (idx < this.__count && idx >= 0) {
      if (idx === 0) {
        if (prevNode) {
          prevNode.next = node?.next
        } else {
          this.head = node?.next
        }
        this.__count--
      }
      prevNode = node
      node = node?.next
      idx--
    }
  }

  find(val: any): Node | undefined {
    let node = this.head
    while (node) {
      if (node.data === val) {
        return node
      }
      node = node.next
    }
    return undefined
  }

  dumpList() {
    let node = this.head
    while (node) {
      console.log(node === this.head ? '\nNode[head]:' : '  Node:', node.data)
      node = node.next
    }
  }
}
