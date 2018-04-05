//object destruct
const person = {
    name:'Ilija',
    age: 26,
    locatin:{
        city:'Beograd',
        temp: -1
    }
};


//const name = person.name;
//const age = person.age;

const { name:firstName = 'Anonymus', age } = person;

console.log(`${firstName} is ${age} yeas old.`);

const { city, temp: temperature } = person.locatin;
if(city && temperature){
    console.log(`Its ${temperature} in ${city}`);
}


//array destruct

const address = ['Vladisava Nikolica 60','Beograd','Srbija','11460'];

const [ , town, state ] = address;
console.log(`You are in ${town} ${state}`);