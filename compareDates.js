const date1 = new Date("Jan 01, 2020 00:00:00")
const date2 = new Date("Mar 01, 2020 00:00:00")

const today = new Date()

function compareDates(){
    if ( today >= date1 && today <= date2 ) return "Date is avaliable"
    return "Date is invalid"
}


console.log(compareDates())