let num=13 
let r=0
    for(i=1;i<=num;i++){
        if(num%i==0){
            r+=1;
        }
     }
        if(r==2){
         console.log("Yes")
     }   
     else{
         console.log("No")
     }