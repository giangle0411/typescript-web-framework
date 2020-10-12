interface userProps {
  name?: string // ? means <optional> syntax
  age?: number
}

type Callback = () => {}

export class User {
  events: { [key: string]: Callback[] } = {}

  constructor(private data: userProps) {}

  get(propName: string): string | number {
    return this.data[propName]
  }

  set(update: userProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: Callback) {}
}
