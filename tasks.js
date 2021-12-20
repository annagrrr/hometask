//Task 1

let array1=[1, 2, 3];
let array2=[2, 30, 1]

let arrays= array1.concat(array2);

const mergeArrays = [...new Map(arrays.map(item => [JSON.stringify(item), item])).values()];

console.log("Task 1" + ": " + mergeArrays);

//Task 2


//Task 3

const persons = [
    {
    name: 'Julia',
    age: 27
    },
    {
    name: 'Martin',
    age: 45
    },
    {
    name: 'Taavi',
    age: 17
    },
    {
    name: 'Emma',
    age: 2
    },
    {
    name: 'Ricky',
    
    age: 62
    }
    ]

   const totalSumOfAges = persons.reduce(function (acc, obj) { return acc + obj.age; }, 0);

   console.log("Task 3" + ": " + totalSumOfAges);
    
   //Task 4

   const persons1 = [
    {
    name: 'Julia',
    age: 27,
    gender: "girl"
    },
    {
    name: 'Martin',
    age: 45,
    gender: "boy"
    },
    {
    name: 'Taavi',
    age: 17,
    gender: "boy"
    },
    {
    name: 'Emma',
    age: 2,
    gender: "girl"
    },
    {
    name: 'Ricky',
    age: 62,
    gender: "boy"
    }
    ]
    const boyNames = ['Martin', 'Taavi', 'Ricky']
    const girlNames = ['Julia', 'Emma']

    const people = {
    boys: persons1.filter(word=>word.gender==="boy"),
    girls: persons1.filter(word=>word.gender==="girl"),
    }
    console.log(people)

    //Task 5
        
        people1 = persons1.map( function( item ){
        for(var key in item){
             item[ key.toUpperCase() ] = item[key];
            delete item[key];
        }
            return item;
        })
        console.log(people1);


