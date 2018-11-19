const greetingFunction = (function(){

let greetingTime = new Date();
let greeting1 = document.getElementById('output');

if (greetingTime<8){
    greeting1.innerHTML ='dobr&#283; rano';
    greeting1.style.fontSize = '4rem';
    greeting1.style.fontFamily = 'georgia';
    greeting1.style.marginLeft='25px';
    console.log(greeting1);
    
}

else if (greetingTime<14) {
     greeting1.innerHTML='dobry den';

}else if(greetingTime<20){
    greeting1.innerHTML='dobrou noc';
}else {
    greeting1.innerHTML='mas v pondeli &#269;as';
    greeting1.style.fontSize = '4rem';
    greeting1.style.fontFamily = 'georgia';
    greeting1.style.marginLeft='25px';
}
});
greetingFunction();