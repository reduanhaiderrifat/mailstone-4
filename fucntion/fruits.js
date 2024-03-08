const fruits = ['lemon','bannana','orange','apple','mango'];
console.log(fruits[3])
fruits[2] = 'jambura';
console.log(fruits)

const tourist = ['bandarban', 'coxBazar', 'ranggaMati'];
tourist.push('oPoint');
console.log(tourist)
tourist.push('liabrry', 'vhola');
console.log(tourist)
tourist.pop();
console.log(tourist)

const book = ['bangla', 'english','math','biology']
console.log(book.includes('javascript'))
console.log(book.includes('rifat'))
console.log(book.includes('math'))
console.log(Array.isArray(book))

const numbers = [34, 43,45,54,56,67,65];
const numbers1 = [76,57,23,12,43,43,45];

console.log(numbers.concat(numbers1))

numbers.splice(2,1,12,11)
console.log(numbers)