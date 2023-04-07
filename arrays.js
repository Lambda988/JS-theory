const arr = ['a','b','c','d']
for (let i=0; i < arr.length; i++)
{
    console.log(arr[i]);
}
for(let i of arr){
    console.log(i);
}
for (let j in arr){
    console.log(j)
}

arr.forEach(function(element, indecx)
{
    console.log(index + ': ' + element);
})

const newArr = arr.map(function(element, index)
{
    return element.toUpperCase()
})

const fillerdArr = arr.filter(function(element){
    return element == 'a' || element=='c'
})

const numsArray = [1, 2, 3, 4, 5]
const sum = numsArray.reduce (function(acc, element)
{
    return acc + element 
},0)
// reduce analog
сonst sum2 = numsArray.reduce((acc, el) => acc + el)