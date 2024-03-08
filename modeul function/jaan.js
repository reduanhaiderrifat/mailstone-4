const number = 45;
function fanOffKor (){
    console.log('bosha theke ute dara');
    console.log('walk towords the switch');
    console.log('click the switch');

}
fanOffKor();
function brushTeeth(){
    console.log('pick up the brash');
    console.log('add paste');
    console.log('2 min bradh kor');
}
brushTeeth();




// parameter

function squear (number) {
    console.log('pick up the brash',number);
    let borgo = number * number;
    console.log('2 min bradh kor :' ,borgo);
}
squear(5);
squear(53);
squear(52);
squear(25);


function addAll(a, b, c, d, e){
    let total = a + b +c + d+e;
    console.log(total)
}
addAll(5, 4, 6, 7, 2);


function doubleIt (number){
    const double = number * 2;
    console.log(number, double)
}
doubleIt(45);

const money = 55;
doubleIt(money);



// returen

function tentimes(number){
    const result = number * 10;
    return result;
}

const output = tentimes(5);
console.log('out:', output)




function isEven(number){
    if(number % 2 === 0){
        return true;
    } else{
        return false;
    }
}

console.log(isEven(5));


// String

function evenSizeString (str){
    const size = str.length;
     if(size % 2 === 0){
        console.log('even size')
        return true;
     } else{
        console.log('odd size')
        return false;
     }
    // console.log(str,size);
}
const h = evenSizeString('dhaka')
console.log(h)
const i =evenSizeString('faka')
console.log(i)



function doubleOrTriple(number,doDouble){
    if(doDouble === true){
   const result = number *2;
   return result;
    } else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5, true))
console.log(doubleOrTriple(5, false))



function numberOfElements(numbers){
   
    const len = numbers.length;
    return len;
}
console.log(numberOfElements([34, 54, 1234, 324, 34]))



function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum += number;
    }
    return sum;
}

const numbs = [12, 23 ,43 ,45 ,56];
const sum = sumOfNumbers(numbs) 
console.log(sum)

console.log('-----------------')

function sumNumber(numbers){
    let sum1 =0;
    for(number1 of numbers){
        console.log(number1);
          sum1 += number1;
    }
    return sum1;
}

const nums = [23,23,23,45,56,56,67,8723,];
const sum1 = sumNumber(nums);
console.log('sum of number :',sum1)

function evenNumbers(numbers){
    let even1 =[];
        for(const number of numbers){
            if(number % 2 ===0){
                console.log(number)
                even1.push(number);
                
                
            }
            
        }
        return even1;
}
const even1 = evenNumbers([23,34,55,67,33,22,44,88,59]);

console.log(even1)

console.log('rifat')

function evenNumbers(numbers){
    let even =[];
    let sum4= 0;
        for(const number of numbers){
            if(number % 2 ===0){
                console.log(number)
                even.push(number);
               sum4 +=number;
            }
           
            
        }
        return sum4;
        
}
const even = [23,34,55,67,33,22,44,88,59]; 
const sum4 = evenNumbers(even)
console.log('sum of even numbers',sum4)

console.log('rifat')
// object : write a fuction to givr mr the sum of all numbers in an array


function sumOfnums(numbers){
    let sum3 =0;
    for(const number1 of numbers){
        console.log(number1);
        sum3 += number1;
    }
  return sum3;
}
const nums1 = [12,23,32,3,445,54]
const sum3 = sumOfnums(nums1);
console.log('sum of numbers is',sum3)



// 1.fuction
// 2.parameter
// 3.returen