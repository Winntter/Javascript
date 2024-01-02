// Is the year 2000 a leap year?:
// 2000 ÷ 4 = 500 (Leap)
// 2000 ÷ 100 = 20 (Not Leap)
// 2000 ÷ 400 = 5 (Leap!)


function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if(year % 400 === 0) {
                return "Leap Year."
            }
        } else {
            return "Leap Year."
        }
    } else {
        return "Not Leap Year."
    }
}

console.log(isLeap(2001))