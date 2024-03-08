const sentence = 'i am good web developer';
console.log(sentence.split(' '))

// let reverse = '';
// for(const letter of sentence){
//     console.log(letter)
//     reverse = letter + reverse;
// }
// console.log(reverse)

let reverse = [];
for(let i =0; i <sentence.length; i++){
    const letter = sentence[i];
    reverse.unshift(letter);
}
console.log(reverse)

for(let i = 0; i < sentence.length; i++){
    console.log(i)
    console.log(sentence[i])
}

const reversed = sentence.split('').reverse().join('');
console.log(reversed)


// tasks1


 