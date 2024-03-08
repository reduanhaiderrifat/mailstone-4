console.log(5 > 10);
console.log(5 < 10);
console.log(10 ==10 );
console.log(15 >=10 );
console.log(5 >=10 );
console.log(5 <=10 );







if(5 <10){
    console.log('i have some money');
}

var paniPuri = 100;
if(paniPuri < 200){
console.log('give me pani puri');
}

var weight = 40 ;
if(weight < 40){
    console.log('I will carry it by myself')
}
else{
    console.log('I will rent a rickshaw')
}


const salary = 25000;
const isBCS = true;
const heigth = 50;
if(salary > 20000){
    console.log('okey')

}
else{
    console.log('get out')
}
if(salary > 20000 || heigth >34){
    console.log('come here')
}
else{
    console.log('grt out');
}

if(salary > 30000 && heigth > 60){
    console.log('come here');
}
else{
    console.log('get out');
}

const price = 3000;
if(price >= 5000){
    const discount = price * 10 / 100;
    const payamount = price - discount;
    console.log(payamount);
}
else if (price > 2500){
    const discount = price * 5 / 100;
    const payamount = price - discount;
    console.log(payamount);
}
else{
    console.log(price);
}


const age = 25;
const price2 = 500;
if(age <= 12){
    console.log('you can eat free')
}
else if(age >= 60){
    const discount = (price2 * 50 / 100);
    const payAmount = (price2 - discount);
    console.log(payAmount)
}
else if(age >= 40){
    const discount = (price2 * 25 / 100);
    const payAmount = (price2 - discount);
    console.log(payAmount)
}
else if(age < 17 ) {
    const discount = (price2 * 10 / 100);
    const payAmount = (price2 - discount);
    console.log(payAmount)
}

else  {
    console.log(price2)
}

// nasted




// tarnery
const age2 = 10;
// if(age2 >=18){
//     console.log('you can vote')

// }
// else{
//     console.log('ghumai thako')
// }

age2 >= 18 ? console.log('vote') : console.log('go home')



// if(isLeader === true){
//     price3 = 0;


// }
// else{
//     price3 = price3 + 100;
    
// }
// console.log(price3)

// price3 = isLeader === true ? 0 : price3 + 100;


var price3 = 2000;
const isLeader = true;
if(isLeader === true){

    if(price3 > 1000){
        price3 = price3 /2;
    }
    else{
        price3 = 0;
    }


}
else{
    price3 = price3;
}

// push-pop

const age1 = [];
const numbers = [12, 87, 98, 45];
console.log(numbers)
numbers.push(44);

console.log(numbers)

// pop
const friends = ['balam', 'kalam', 'salm'];
friends.push('rifat');

console.log(friends)
friends.pop();
friends.pop();
console.log(friends)

friends.shift();
console.log(friends)
friends.unshift('ghumailam')
console.log(friends)


console.log(friends.includes('gelam'))
console.log(friends.includes('kalam'))
if(friends.includes('khailam')){
    console.log('we go together')
}
else{
    console.log('we do nothin')
    
}

console.log(friends.indexOf('kalam'))
console.log(friends.indexOf('rifat'))

const num = [];
const food = "ros o gol la";
const age5 = 45;
console.log(Array.isArray(friends))
console.log(Array.isArray(num))
console.log(Array.isArray(food))
console.log(Array.isArray(age5))