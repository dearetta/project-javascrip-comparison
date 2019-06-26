let myAge = prompt('How old are you?')
let hisAge = prompt('How old is he?')

if (myAge < hisAge) {
    console.log("My age is younger than him");

} else if (myAge > hisAge) {
    console.log("Your age is still younger than him");

} else {
    console.log("You are younger than him");

}

let resultAge = parseInt(myAge) + parseInt(hisAge)
console.log(resultAge);
switch (true) {
    case 20 > resultAge > 30:
        console.log("OLD");
        break

    case resultAge = 30:
        console.log("NOT OLD");
        break

    default:
        console.log(`The result of your age is ${resultAge}` );

}

const personDea = {
    name: 'Dea',
    age: 19
}

const personRafi = {
    name: 'Rafi',
    age: 21
}

const a = 4;

switch (true) {
    case parseInt(personDea.age) + a == parseInt(personRafi.age):
        console.log("you have the same age");
        break

    case parseInt(personDea.age) + a > parseInt(personRafi.age):
        console.log("Dea is older than Rafi");
        break

    default:
        console.log("Your age is 19 his age is 21");



}