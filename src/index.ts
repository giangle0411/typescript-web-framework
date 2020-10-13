import { User } from './models/User'

const user = new User({ name: 'New Record', age: 23 })

user.save()

setTimeout(() => {
  console.log(user)
}, 4000)
