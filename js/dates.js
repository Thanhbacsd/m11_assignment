//STEP 1
// Input the month in number
let month = prompt('Get days in the month: Please enter the month(X/XX): ')
// Input the year because in February the number of days is different in different yers
let year = prompt('Please enter the year(XXXX): ')
// get number of the days in the month
let days = new Date(year, month, 0).getDate()
// Convert month in number to month name to output
let month_dict = {
    1 : 'January',
    2 : 'February',
    3 : 'March',
    4 : 'April',
    5 : 'May',
    6 : 'June',
    7 : 'July',
    8 : 'August',
    9 : 'Seotember',
    10 : 'October',
    11 : 'November',
    12 : 'December'
}
let monthName = month_dict[month]
// print output 
console.log(`The days of the ${monthName} in the ${year} is ` + days + ' days')

//STEP 2
let date2 = prompt('Get month name: Please enter a particular date(MM-DD-YYYY) or "t" for today): ')
d = new Date();
if(date2 == 't'){
    month = d.toLocaleString('default', { month: 'long' });
    console.log('This month is ' + month + '.');
}
else{
    month = new Date(date2)
    let month_name = month.toLocaleString('default', { month: 'long' });
    console.log('The month name is ' + month_name + '.');
}



//STEP 3
let date3 = prompt('Check weekend: Please enter the date(MM-DD-YYYY): ')
let d3 = new Date(date3)
let day3 = d3.getDay()
if(day3 == 6 || day3 == 0){
    console.log('The day is weekend.')
}
else{
    console.log("The day isn't weekend.")
}


//STEP 4
// Input the day to get yesterday's day.
let day4 = prompt('Please enter the date to get yesterday\'s day name (MM-DD-YYYY or "t" for today): ')
let locale = 'en-US'
let d4;
if (day4 === 't'){
    d4 = new Date()
}
else{
    d4 = new Date(day4)
}
d4.setDate(d4.getDate() - 1)
let ydayName = d4.toLocaleDateString(locale, { weekday: 'long' });
console.log('Yester\'s day is ' + ydayName); 


//STEP 5
let date5 = new Date()
let day5 = date5.setDate(date5.getDate())
let dayName = date5.toLocaleString(locale, { weekday: 'long' })
console.log('The first letter of today name is ' + dayName[0])

