const friends = ['rifat', 'arik', 'shanto','akash', 'orion'];
friends.reverse();
console.log(friends)
for(let n = 0; n < friends.length; n++){
    console.log(n)
    console.log(friends[n])
}

let i = 0;
while(i < friends.length){
    console.log(i, friends[i])
    i++;    
}


const numbers = [1,2,3,4,5,6,7,];

numbers.reverse();
console.log(numbers)



const sentence = ' I am learning web DEv';

console.log(sentence.split('').reverse(''))