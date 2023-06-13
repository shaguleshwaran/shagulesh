let text="";
let i="";
for(let i=0;i<=10;i++){
    if(i%2==0)
    text += " the even number is "+i+"<br>"
}
console.log(i);
document.getElementById("even").innerHTML=text;

let number="";
for(let i=1;i<10;i+=2){
    if(i%2==1)
    number += " the odd number is "+i+"<br>"
}
console.log(i);
document.getElementById("odd").innerHTML=number;