function add(a: number, b: number): number {
  return a + b
}
const username = 'hamed'
typeof username === 'string'
interface User {
  name: {
    first: string
    middle: string
    last: string
  }
}
function getFullName(user: User): string {
  const {
    name: {first, middle, last},
  } = user
  return [first, middle, last].filter(Boolean).join(' ')
}

add(1, 2)

getFullName({name: {first: "6", middle: 'Bud', last: 'Matthews'}})