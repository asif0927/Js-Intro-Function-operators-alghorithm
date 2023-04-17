/*Regular Function */
function stringReturn(num,letter){
   let result="";
   for(let i=1;i<=num;i++){
    result+=letter;
   }
   return result;
}
console.log(stringReturn(5,"b"));
/*Anonim Function */
const anonimStringReturn=function(num,letter){
    let result="";
    for(let i=1;i<=num;i++){
        result+=letter;
    }
    return result
}
console.log(anonimStringReturn(7,"s"));
/*Arrow Function */
arrowStringReturn=(num,letter)=>{
    let result="";
    for (let i=1;i<num;i++){
        result+=letter;
    }
    return result;
}
console.log(arrowStringReturn(9,"d"));