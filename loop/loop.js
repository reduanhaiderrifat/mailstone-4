const mobile ={
    brand:'samsung',
    price:25000,
    color:'black',
    camera:'12mp'
}

for(const prop in mobile){
    console.log(prop)
    console.log(mobile[prop])
}

const key = Object.keys(mobile);
// console.log(key)

for(const key1 of key){
    console.log(key1,': ',mobile[key1])
}