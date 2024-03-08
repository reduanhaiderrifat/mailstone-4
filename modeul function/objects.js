const student ={
    name: 'rifat',
    id : 121,
    address : 'movei cinema',
    isSingle:true,
    friends:['apu','raaz','salmon','amir'],
    movies:[{name:'no.1',year:2007},{name:'king khan', year: 2018}],
    act: function(){
        console.log('acting like a hero');
    },
    car:{
        brand:'tesla',
        price:500000,
        color:'red'
    }
}
student.act()
console.log(student.act)


const products = {
    '0':15,
    '1':30,
    '2':87,
}
console.log(products)

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments)
}
add(12, 13,45,89,78); 
// array like object