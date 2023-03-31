//@ts-check
/*let user = 'John'
let user2
user2 = 'Jane'
const user3 = 'Jef'
let string = "Hellow world"
let num = 34
let boolean = false
let Null = null
let Undefined = undefined
let symbol = Symbol('First symbol')
if (Null) {
    console.log('Condition is true')
}
else {
    console.log('Condition is not true')
}

let age = 19
let gender = 'Male'
let prefix = 'Mr'*/
/*if ((age>18) && (gender=='male'))
{
console.log('MR')
}
else if ((age<=18) && (gender=='male'))
{
console.log('boy')
}
else if ((age<=18) && (gender=='Female'))
{
console.log('girl')
}
else if ((age>18) && (gender=='Female'))
{
console.log('woman')
}*/

/* if (age>18){
     if (gender == "Male")
     {prefix ='Mr'}
  else {
     prefix = "MRS"
 }}
 else {
     if (gender == 'Male')
     {
         prefix = 'boy'
     }
     else
     {
         prefix = 'girl'
     }
 }*/
/*prefix = (age > 18) ?
    (gender == 'Male') ? 'Mr.' : 'Mrs' :
    (gender == 'Female') ? 'girl' : 'boy'
console.log(prefix);*/

/*let price
let city = 'Paris'
switch (city) {
    case 'Moscow':
        price = 10
        break;
    case 'Berlin':
        price = 9
        break;
    case 'Paris':
        price = 8
            break;
    default:
        price = 15
        break;
}
console.log(`Prise (${city}): $ ${price}`);*/

/*let count = 0;
while
    (count <= 10)
    {
    console.log(count);
    count ++;
    }

    let k = 0;
    for (let k=0; k<11; k++){
        console.log(k)
    }*/
/* let numofPersons = 26 // 1 2 3 ... 26
 let child=0
 let adeld=0
 let age = 1
while (age <= numofPersons) {
   
    if(age < 18)
    {
        child++
    }
    else
    {
        adeld++
    }
    age++
 }
 console.log(child);
 console.log(adeld);*/

/*let maxAge = 26 // 1 2 3 ... 26
let child=0
let adeld=0
let age=1
for (let age=1; age<=maxAge; age++)
{
   if (age <18)
   {
       child ++
   }
   else
   {
       adeld++
   }
}
console.log(child);
console.log(adeld);*/
/*let child=0
let adeld=0
let arrayOfAge=[13, 12, 28, 45, 75, 8]
for (let i = 0; i<=arrayOfAge.length; i++)
   {   let age = arrayOfAge[i]
       if (age < 18)
       {
           child++
       }
       else
       {
           adeld++
       }
   }
   console.log(child);
   console.log(adeld);*/
/*let array = [1, 2, 3, 4, 5]
array.push(6)
array.push(7)
for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2
}
console.log(array);*/
/*let array = []
Math.floor(Math.random()*29+1);
for (let i = 1; i <=10 ; i++)
{   
   let random = Math.floor(Math.random()*29+1)
   array.push(random)
}
console.log(array);*/
/*let array = []
Math.floor(Math.random()*29+1);
for (let i = 1; i <=10 ; i++)
{   
   let random = Math.floor(Math.random()*29+1)
   array.push(random)
}
console.log(array);
let fillerdArr=[]
for (let i =1; i <array.length; i++)
{   
    let age = array[i]
    if (age>17)
    {
    fillerdArr.push(age)
    }
}
console.log(fillerdArr);*/

/*let array = [1, 2, 3, 4, 5]
array.forEach(function(value, index){
    array[index]= value*5
    console.log(array);
})*/
let array = [1, 2, 3, 4, 5]
let newArr = array.map(function(value, index)

{
    return value *5
}
)
console.log(array)
console.log(newArr)


//DZ
let originArr = [1, 2, 3, 4, 5]
// for (let i = originArr.lenght -1; i>=0; i--)
let revertArr = []//[5, 4, 3, 2, 1]