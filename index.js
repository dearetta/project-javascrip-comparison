const myAge = 19
const hisAge = 20

if (myAge < hisAge){
    console.log("My age is younger than him");
    
} else if (myAge > hisAge) {
    console.log("Your age is still younger than him");
    
}else {
    console.log("You are younger than him");
    
}

let resultAge = myAge + hisAge
console.log(resultAge);


switch(resultAge > 30)
{
    case true:
        console.log("The result of both of your ages are older than 30");
        break

    case false:
        console.log("The result of both of your ages are not older than 30");
        break

    default:
        console.log("The result of your age is 39");
               
}

const personDea = {
    name: 'Dea',
    age: '19'
}

const personRafi = {
    name: 'Rafi',
    age: '21'
}

switch (personDea.age + 2 == personRafi ) {
    case true:
        console.log("Your age plus one equals to his age");
        break
    
    case false:
        console.log("it's wrong");
        break

    default:
        console.log("Your age is 19 his age is 21");
        
        
        
}