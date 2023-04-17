let a=44;
let result=1;
let natamamqismet=Math.floor(a/7);//29/7=4 41/7=5 39/7=5
let qaliq=a%7;//29%7=1;41%7=6  39%7=4
if(a%7==0){
    console.log("7-nin bolenidir");
}
if(qaliq<4&&qaliq!=0){
    result=7*natamamqismet;
}
else{
    result=7*(natamamqismet+1);
}
console.log(result);
