//button example
// let button = document.querySelector('.btn1').addEventListener('click',clicked);

// function clicked () {
// console.log('button clicked');
// };

//Date and Time format
let dateTime = new Date();
document.getElementById("currentDate").innerHTML = dateTime.toDateString();

let topButton = document.querySelector('.btn2').addEventListener('click',toggleDate);

function toggleDate (){
    
    let currentDay= document.getElementById('currentDate');
    if(currentDay.style.display==='none'){
    currentDay.style.display= 'block';
    }else {
    currentDay.style.display='none';
    }
    /*For testing purposes
    console.log('click test2');  */
   };

/*Button and function for the paragraph background color change */

let button = document.querySelector('.btn1').addEventListener('click',clickMe);

let container = document.querySelector('.container');

function clickMe (){
    
     console.log('click test');
     container.style.backgroundColor=' green';
     container.style.color='#f4f4f4';
     setTimeout (()=> container.style.color='green', 1000);
     setTimeout (()=> container.style.backgroundColor='#f4f4f4', 1000);
     setTimeout (()=> container.style.backgroundColor='green', 3000);
     setTimeout (()=> container.style.color='white', 3000);
     setTimeout (()=> container.style.backgroundColor='red', 5000);
     setTimeout (()=> container.style.color='white', 5000);
     setTimeout (()=> container.style.backgroundColor='blue', 7000);
     setTimeout (()=> container.style.color='white', 7000);
     setTimeout (()=> container.style.backgroundColor='yellow', 9000);
     setTimeout (()=> container.style.color='red', 9000);
     setTimeout (()=> container.style.backgroundColor='white', 11000);
     setTimeout (()=> container.style.color='#444', 11000);
     clock.style.color='red';
    };

    

    let setHours = new Date();
    document.getElementById("clock").innerHTML = setHours.getHours();
    
    
    



// let content= document.querySelector('.container').addEventListener('click',color);



// let text = 'Are you ready to code some';
       
// alert('This is Javascript');
// setTimeout (()=>alert(`${text} Javascript ? `),1000);
// setTimeout (()=> document.write('press F12'), 1000);

// const text2= 'Lets code some';
// console.log(`${text2} javascript`);




