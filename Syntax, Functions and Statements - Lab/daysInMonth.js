function daysInMonth(month, year){
let a = new Date(year, month);
a.setDate(0)

console.log(a.getDate());

}

daysInMonth(1, 2012);
daysInMonth(2, 2021);