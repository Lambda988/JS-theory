let condition = true
// Simple if statement
if (condition) {
    console.log("That's ok");
}


// if ... else ...
if (condition) {
    console.log("That's ok");
}
else {
    console.log("No good man");
}


// if ... else if ... else
let age = 5
if (age < 14) {
    console.log('Baby');
}
else if (age < 18) {
    console.log('Teenager');
}
else (age > 18) {
    console.log('Adult')
}


let gender = 'Female'
// Nested conditions
if (age > 17) {
    if (gender == 'Female') {
        console.log('Mrs');
    }
    else {
        console.log('boy');
    }
}
else if (age < 18) {
    if (gender == 'Male') {
        consolr.log('boy');
    }
    else {
        consolr.log('girl');
    }
}
// Thernar operator
const greetting = (age > 17 && gender == 'Female') ? 'Mrs.' : 'Goodbye'

const message = (gender == 'alian' || gender == 'marsian') ? 'Zak-Zak' : 'Hello'

if ((age >= 18) && (gender == 'male')) {
    console.log('man')
}
else if ((age < 18) && (gender == 'male')) {
    console.log('boy')
}
else if ((age < 18) && (gender == 'Female')) {
    console.log('girl')
}
else if ((age >= 18) && (gender == 'Female')) {
    console.log('woman')
}

const greting = (age > 17 )
    ?(gender == 'Female')? 'Mrs':'Mr'
    :(gender == 'Female')? 'girl':'boy'
