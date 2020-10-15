import { View } from './View'
import { User, UserProps } from '../models/User'
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveModelClick,
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

  onSaveModelClick = (): void => {
    this.model.save()
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
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `
  }
}
