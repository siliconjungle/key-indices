class KeyIndices {
  constructor(order = []) {
    const entries = order.map((key, index) => [key, index])
    this.map = new Map(entries)
    this.order = [...order]
  }

  add(key) {
    const index = this.order.length
    this.map.set(key, index)
    this.order.push(key)
  }

  getIndex(key) {
    return this.map.get(key)
  }

  getKey(index) {
    return this.order[index]
  }

  clear() {
    this.map.clear()
    this.order = []
  }

  getOrder() {
    return this.order
  }
}

export default KeyIndices
