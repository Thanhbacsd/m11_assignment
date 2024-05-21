//STEP 1
let num = prompt('1. Math.abs(): Please enter a number: ')
console.log(Math.abs(num))

//STEP 2
num = prompt('2. Math.ceil(): Please enter a float number as: xx.xxxx: ')
console.log('Your number is less than a nearest integer number: ' + Math.ceil(num))

//STEP 3
num = prompt('3. Math.floor(): Please enter a float number as: xx.xxxx: ')
console.log('Your number is more than a nearest integer number: ' + Math.floor(num))

//STEP 4
let list_num = prompt('4. Math.max.apply()/min.apply(): Please enter 5 numbers delimited by ",": ')
let list_str = list_num.split(',')
console.log('Your max and min numbers is ' + Math.max.apply(Math,list_str) + 
                                    ' and ' + Math.min.apply(Math,list_str))

//STEP 5
num = prompt('5. Math.sqr(): Please enter a number: ')
console.log('The square root of the number is ' + Math.sqrt(num))
