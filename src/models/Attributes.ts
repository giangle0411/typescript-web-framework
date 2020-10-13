export class Attributes<T> {
  constructor(private data: T) {}

  // Another generic constraint
  get<K extends keyof T>(key: K): T[K] {
    // T[K] is object lookup
    // K is a key of object with type T
    return this.data[key]
  }

  set(update: T): void {
    Object.assign(this.data, update)
  }
}
