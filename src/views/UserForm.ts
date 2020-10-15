import { View } from './View'
export class UserForm extends View {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input')
    if (input) {
      // Strict null check - when there's tsconfig.json
      const name = input.value
      this.model.set({ name })
    }
  }

  onHeaderHover(): void {
    console.log('h1 was hovered over')
  }

  onButtonClick(): void {
    console.log('Hi there!')
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `
  }
}
