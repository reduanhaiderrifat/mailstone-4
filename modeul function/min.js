const prices = [20000,30000,150000,50000,40000];

function getmin(numbers){
    let min = numbers[0];
        for(num of numbers){
       if(num<min){
        min = num;
       }
    }
    return min;
}
const cheap = getmin(prices);
console.log(cheap)



// objects

const phones =[
  {name:'samsung',price:30000,camera:'12mp',color:'black'},
  {name:'xoami',price:31000,camera:'12mp',color:'black'},
  {name:'oppo',price:130000,camera:'12mp',color:'black'},
  {name:'iphone',price:150000,camera:'12mp',color:'black'},
  {name:'walton',price:3000,camera:'12mp',color:'black'},
  {name:'nokia',price:750000,camera:'12mp',color:'black'},
]

function getchepest(phones){
    let min = phones[0]
   for(phone of phones){
    if(phone.price < min.price){
  
  min = phone
    }
   }
   return min;
}
console.log(getchepest(phones))


function checkName(name){
  if( typeof name !== 'string'){
      return "Invalid";
  }
  const lastCheater = name[name.length - 1].toLowerCase( );
  if(lastCheater === 'a' || lastCheater === 'y' || lastCheater === 'i' || lastCheater === 'e' || lastCheater === 'o' || lastCheater === 'u' || lastCheater === 'w' ){
        return "Good Name";
  } else{
      return "Bad Name";
  }
}
const  name1 = checkName('rifai');
console.log(name1);