const today = new Date();
const date = new Date('2024-2-4')
console.log(date.getMonth());
console.log(date.getDay())
const specificaDate = new Date(2025, 1, 4)
console.log(specificaDate.toLocaleString('en-GB'))


// unix epoc


let a =5;
let b = 7;
[a, b]=[b, a];
console.log(a,b)
let a1 =5;
let b1 = 7;
const tem = a1;
a1=b1;
b1=tem;

console.log(a1,b1)