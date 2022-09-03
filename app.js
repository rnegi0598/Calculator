

let num=0;
let equation;

const displayEl=document.querySelector('.display-text');
displayEl.innerHTML=num;




document.querySelector('.clear').addEventListener(
    'click',
    ()=>{
        num=0;
        equation=null;
        displayEl.innerHTML='0';

    }
);
//digits
document.querySelector('.seven').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='7';
        }else{
            equation='7';
        }
        num=displayEl.innerText+'7';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.eight').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='8';
        }else{
            equation='8';
        }
        num=displayEl.innerText+'8';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.nine').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='9';
        }else{
            equation='9';
        }
        num=displayEl.innerText+'9';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.four').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='4';
        }else{
            equation='4';
        }
        num=displayEl.innerText+'4';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.five').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='5';
        }else{
            equation='5';
        }
        num=displayEl.innerText+'5';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.six').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='6';
        }else{
            equation='6';
        }
        num=displayEl.innerText+'6';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.one').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='1';
        }else{
            equation='1';
        }
        num=displayEl.innerText+'1';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.two').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='2';
        }else{
            equation='2';
        }
        num=displayEl.innerText+'2';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.three').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='3';
        }else{
            equation='3';
        }
        num=displayEl.innerText+'3';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.zero').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='0';
        }else{
            equation='0';
        }
        num=displayEl.innerText+'0';
        displayEl.innerText=eval(num);

    }
);
document.querySelector('.decimal').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='.';
        }else{
            equation='0.';
        }
        num=displayEl.innerText+'.';
        displayEl.innerText=num;

    }
);
// operation
document.querySelector('.equal').addEventListener(
    'click',
    ()=>{
        if(!equation){
            equation='0';
        }
        num=eval(equation);
        displayEl.innerText=num;
        equation=num;

    }
);
document.querySelector('.add').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='+';
        }else{
            equation='0+';
        }
        
        displayEl.innerText='+';

    }
);
document.querySelector('.subtract').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='-';
        }else{
            equation='0-';
        }
        
        displayEl.innerText='-';

    }
);
document.querySelector('.multiply').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='*';
        }else{
            equation='0*';
        }
        
        displayEl.innerText='*';

    }
);
document.querySelector('.divide').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation+='/';
        }else{
            equation='0/';
        }
        
        displayEl.innerText='/';

    }
);
document.querySelector('.percentage').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation/=100;
            equation=eval(equation);
        }else{
            equation='0';
        } 
        displayEl.innerText=equation;

    }
);
document.querySelector('.unary').addEventListener(
    'click',
    ()=>{
        if(equation){
            equation=eval(equation);
            if(equation>0){
                equation*=-1;
            }
        }
        displayEl.innerText=equation;

    }
);