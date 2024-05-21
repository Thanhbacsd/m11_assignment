//STEP 1
let userName = prompt('1. String.length: Enter your name here: ')
alert('Your name has ' + userName.length + ' characters.')

//STEP 2
userName = prompt('2. Numbers of charcacodes: Enter your name:')
chnum_arr = []
for(let i =0; i < userName.length; i++){
    chnum_arr[i] = userName.charCodeAt(i)
}
alert(`These numbers are char-code of your name: ${chnum_arr}`)


//STEP 3
let fName = prompt('3. String.concat(): Enter your first name here: ')
fName = fName.concat(' ')
let lName = prompt('Enter your last name here: ')
let name = (fName.concat(lName))
alert('Your name is: ' + fName.concat(lName))

//STEP 4
let txt = "The quick brown fox jumps over the lazy dog"
alert('The index of the word “fox” is ' + txt.indexOf('fox'))

//STEP 5
txt = "The quick brown fox jumps over the lazy fox"
alert('The index of the last instance of the word “fox”: ' + txt.lastIndexOf('fox'))

//STEP 6
txt = "The quick brown fox jumped over the lazy dog"
let Name = prompt('6. String.replace(): Enter your full name here: ')
alert(`Your full name is ${Name.replace(Name, 'the lazy dog')}`)

//STEP 7
txt = "The quick brown fox jumps over the lazy dog"
let word = prompt('7.RegEx.test: Enter your word here: ')
r1 = new RegExp(`${word}`)
if(r1.test(txt)){
    alert(`Your word (${word}) belong the text`)
}
else{
    alert(`Your word (${word}) doesn't belong the text` )
}

//STEP 8
let old_string = "The quick brown fox jumps over the lazy dog"
let p_first = old_string.indexOf('the lazy dog')
let p_end = p_first + 'the lazy dog'.length
let new_string = old_string.slice(p_first, p_end).toUpperCase()
alert(`The result is ${new_string}.`)

//STEP 9
txt = "  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG  "
alert(`Your text in lower case: ${txt.trim().toLowerCase()}`)

//STEP 10
txt = "the quick brown fox jumps over the lazy dog"
let n_txt = txt[0].toUpperCase() + txt.slice(1) + '.'
alert(`Your sentence should such as: ${n_txt}`)