/*Regular */
function monthNum(num){
    let month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    if(num<0||num>12){
        return "invalid input"
    }
    return month[num-1];
}
console.log(monthNum(12));
/*Anonim */
const anonimMonthNum=function(num){
    let month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    if(num<0||num>12){
        return "invalid input"
    }
    return month[num-1];
}
console.log(anonimMonthNum(-7));
/*Arrow */
arrowMonthNum=(num)=>{
    let month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    if(num<0||num>12){
        return "invalid input"
    }
    return month[num-1];
}
console.log(arrowMonthNum(25));