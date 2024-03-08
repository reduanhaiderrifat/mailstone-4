const numbers =[45,56,54,56,67,23];
for(let i=0;i<numbers.length;i++){
    const number = numbers[i];
    console.log(number)
}

for(const number of numbers){
   console.log(number)
}
const products =[
    {id: 1, name:'iphone', price:19000},
    {id: 2, name:'xomi', price:19000},
    {id: 3, name:'nokia phone', price:19000},
    {id: 4, name:'samphony', price:19000},
    {id: 5, name:'lenovo phone', price:19000},
    {id: 6, name:'walton', price:19000},
    {id: 7, name:'nokia 7', price:19000},
    {id: 8, name:'mac book', price:19000},
];
console.log(products)

function matchedproducts(products, search){
    const match = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            match.push(product)
        }
    }
    return match;
}
const result = matchedproducts(products,'phone');
console.log(result)