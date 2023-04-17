let say=0;
a=95;
if (a<50) {
    for(i=1;i<=a;i++){
        if(i%3==0){
          say++;
        }
    }
}
else if(50<a&&a<100){
    for(i=1;i<=a;i++){
        if(i%5==0){
            say++;
        }
    }
}
else if(a>100){
    for(i=1;i<=a;i++){
        if(i%8==0){
            say++;
        }
    }
}
console.log(say);