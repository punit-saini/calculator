
var num = document.querySelectorAll('.num');
var oprt = document.querySelectorAll('.oprt');
var check = document.querySelector('.check');
var show=document.querySelector('#show');
var numlist;
var oprtStore;
var store;
var twostore;
var audio = new Audio ('userclick.mp3');

var times=0;

var operator = false;

var secondTime=false;

var checker=false;
  
var oprtTurn=false;


for(i=0;i<num.length;i++){
   num[i].addEventListener('click', function(){ // before operator
       if (operator==false){
            if(times==0){
                audio.play();
                store=this.innerHTML;
                times++;
                oprtTurn=true;
                show.innerHTML=store;
            }
            else{
                audio.play();
            store+=this.innerHTML;
            show.innerHTML=store;
            }
        console.log('Before String : '+store);
       }
       if(secondTime==true){   // after operator

           if(times==0){
               audio.play();
               twostore=this.innerHTML;
               times++;
               show.innerHTML=store+oprtStore+twostore;
           }
           else {
               audio.play();
               twostore+=this.innerHTML;
               show.innerHTML=store+oprtStore+twostore;
           }
           console.log('After String : '+ twostore);
           checker=true;
           checkerfunc(store);
           
       }
   });

   
}


for(i=0;i<oprt.length;i++){ // operator 
    oprt[i].addEventListener('click',function(){
        if (oprtTurn==true){
            audio.play();
            operator=true;
        oprtStore=this.innerHTML;
        console.log(oprtStore);
        show.innerHTML=store+oprtStore;
        secondTime=true;
        times=0;
        }
    })
}

function checkerfunc(){
    console.log(checker);
    document.querySelector('.check').addEventListener('click',function(){
        if(checker==true){
            audio.play();
            console.log('inside the checker');
            const str= Number(store);
            const twostr= Number(twostore);
            if (oprtStore=='+'){
                document.querySelector('#show').innerHTML=str+twostr;
            }
            else if (oprtStore=='-'){
                document.querySelector('#show').innerHTML=str-twostr;
            }
            else if (oprtStore=='*'){
                document.querySelector('#show').innerHTML=str*twostr;
            }
            else {
                document.querySelector('#show').innerHTML=str/twostr;
            }
            check=false;
        }
    });

}

document.querySelector('.reset').addEventListener('click', function(){
    audio.play();
    operator=false;
    times=0;
    oprtStore=undefined;
    twostore=undefined;
    store=undefined;
    document.querySelector('#show').innerHTML='';
    secondTime=false;
})


    





