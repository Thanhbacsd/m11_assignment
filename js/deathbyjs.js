//STEP 1
function sortAlphabet() {
    let str = prompt('Please enter the text to sort the letters: ')
    let str_sort = str.toLowerCase().split('').sort().join('');
    console.log('Input string: ' + str)
    console.log('Output string: ' + str_sort)
}
sortAlphabet()

//STEP 2
function capitalize(str) {
    str = prompt('Please enter the text to capitalize: ')
    let str_lst = str.split(' ')
    let string = ''
    for(word of str_lst){
        letter_1 = word[0].toUpperCase()
        n_word = letter_1 + word.slice(1)
        string = string + n_word + ' '
    }
    console.log('Output string: ' + string.toString())
}
capitalize()

//STEP 3
function vowels_count(){
    let st = prompt('Please enter the text to count vowels: ')
    console.log('Your test: ' + st)
    console.log('The text has ' + st.match(/[aeoiu]/gim).length + ' vowels: ' + st.match(/[aeoiu]/gim))
}
vowels_count()

//STEP 4
function randomnumber(max){return Math.round(Math.random() * (max + 1))}
function generate_st(){
    let charcod = []
    let id = 0
    // GET CHARCODE OF ALPHABET IN UPPER CASE INTO AN ARRAY
    for (let i = 65; i <= 90; i++) {
        charcod[id] = i
        id++
    }
    // GET CHARCODE OF SPACEBAR INTO THE ARRAY
    charcod[id] = 32
    id++
    // GET CHARCODE OF ALPHABET IN LOWER CASE INTO THE ARRAY
    for (let i = 97; i <= 122; i++) {
        charcod[id] = i
        id++
    }
    let ran_id = 0
    let ran_str =''
    // INPUT THE LENGTH OF RANDOM STRING
    let str_len = prompt('Please enter the length of the random creating string: ')
    // LOOP LENGTH TIMES TO GET RANDOM LETTERS
    for(let i = 0; i < str_len; i++){
        // RANDOM A NUMBER AS INDEX OF ARRAY CHAR CODE
        ran_id = randomnumber(charcod.length)
        // GET LETTER WITH RANDOM INDEX TO THE STRING
        ran_str = ran_str + String.fromCharCode(charcod[ran_id])
    }
    // OUTPUT THE RESULT
    console.log('The random string: ' + ran_str)
}
generate_st()

//STEP 5
function longest_name(){
    // GET LIST OF COUNTRIES NAMES
    let lst_name = (["Australia", "Germany", "United States of America"])
    console.log('The list of the country\'s names is: ' + lst_name)
    let lmax = 0
    let idmax
    // LOOP ALL ELEMENT TO GET INDEX OF THE ELEMENT HAS MAX LENGTH
    for (let i = 0; i < lst_name.length; i++){
        if (lmax < lst_name[i].length){
            lmax = lst_name[i].length
            idmax = i
        }
    }
    // OUTPUT THE RESULT
    console.log('The country has the longest name is ' + lst_name[idmax])
}
longest_name()
