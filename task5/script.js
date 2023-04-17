/*Regular */
function perfectNum(num){
    sum=0;
    for (let i = 1; i<num; i++) {
        if(num%i==0){
            sum+=i;
        }
    }
    if(sum==num){
      return  "perfect"
    }
    else{
      return  "not perfect"
    }
}
console.log(perfectNum(6));//1,2,3,4,6
/*Anonim */
const anonimPerfect=function(num){
    sum=0;
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum+=i;
        }
    }
    if(sum==num){
        return  "perfect"
    }
    else{
        return  "not perfect"
    }
}
console.log(anonimPerfect(12));
/*Arrow function */
 arrowPerfectNum=(num)=>{
    sum=0;
    for(let i=1;i<num;i++){
        if(num%i==0){
            sum+=i;
        }
    }
    if(sum==num){
        return "perfect"
    }
    else{
        return "not perfect"
    }
}
console.log(arrowPerfectNum(9));