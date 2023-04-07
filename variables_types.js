
let varName
//Primitive types
varName='Value'// string
varName=12//number
varName=true//boolean
varName=null//empty
varName=undefined

//Structure types
varName = {
    message: 'Hello', // key : value
    status: 200
}// value type = Object
comsole.log(varname.message)
let user ={
    name:'Jo',
    email: 'test@mail.ru',
    age:33
}
varName = [1, 2, 3, 4, 5]// value type = Array
console.log(varName[2])

//Variables
let username
username = 'Jo'
let email = 'test@mail.ru'
//Old standart
var oldVar = 'Hellow world'

//Const
const options = {
    port: 3000,
    host: 'http://localhost',
    login: 'name',
    password: 'superpass'
}
//wrong!!!!!!!
options = 'new value'

//Variables vasibillry
let age = 35
if(age>17){
    let message = 'Adult'
    console.log(age);
    console.log(message);
} 
else{
    let message = 'Child'
    console.log(age);
    console.log(message);
}
//Error code:
onsole.log(message);