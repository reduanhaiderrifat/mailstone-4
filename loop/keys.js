const computer = {
    brand:'lenovo',
    price: 35000,
    processor:'intel',
    hdd:'512gb',
    ssd:'1tb'
}

const keys =Object.keys(computer);
console.log(keys)

const values= Object.values(computer);
console.log(values)


const college ={
    name: 'vac',
    class: ['11','12'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:'top'
        }
    }
}
    
    console.log(college.name)
    console.log(college.unique.color)
    console.log(college.unique.result.gpa)
    college.class[1] = '13';
    console.log(college.class[1])