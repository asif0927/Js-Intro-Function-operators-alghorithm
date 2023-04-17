/*Regular Formada */
function Factorial(num){
    result=1;
    for(let i=1;i<=num;i++){
       result*=i;
    }
    return result;
}
console.log(Factorial(5));
/* Anonim function */
const AnonimFactorial=function(num){
    let result=1;
    for(let i=1;i<=num;i++){
        result*=i;
    }
    return result;
}
console.log(AnonimFactorial(7));
/*Arrow Function */
arrowFactorial=(num)=>{
    let result=1;
    for(let i=1;i<=num;i++){
        result*=i;
    }
    return result;
}
console.log(arrowFactorial(3));