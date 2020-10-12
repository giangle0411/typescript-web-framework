import { User } from './models/User'

const user = new User({ name: 'My Name', age: 23 })

user.set({ age: 10 })

console.log(user.get('name'))
console.log(user.get('age'))
