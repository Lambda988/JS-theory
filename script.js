    //@ts-check
    let user = 'John'
    let user2 
    user2='Jane'
    const user3 = 'Jef'
    let string="Hellow world"
    let num=34
    let boolean = false
    let Null = null
    let Undefined = undefined
    let symbol = Symbol('First symbol')
    if (Null)
    {
        console.log('Condition is true')
    }
    else
    {
        console.log('Condition is not true')
    }
     
    let age = 16
    let gender = 'Female'
    let prefix = 'Mr'
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

    if (age>18){
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
    }
    console.log(prefix);