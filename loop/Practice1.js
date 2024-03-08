const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
const gld = colors['golden rod']
console.log(gld)
console.log(colors['golden rod'])



// task2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.passangerCapacity = 5;
console.log(car)


// taks2
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

console.log(student.physics.marks)

// task3

let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const  std = Object.keys(student1).length;
console.log(std)
// for(let std in student1){
//     console.log(std.length)
// }



// taks4

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    for(obj in myObject){
        console.log('key :', obj,"|", 'type :', myObject[obj])
    }