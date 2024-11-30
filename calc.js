// Function 
let del = str=>str.slice(0,-1);
let out = str=>output.innerHTML+=str;
let result = str=>output.innerText=str;
let reset = ()=>output.innerText="0";

let inputs = document.querySelectorAll("form > *");

for(let i=0; i<inputs.length; i++){

  inputs[i].addEventListener("click", ()=>{
    // see what is the last char is.
    let isInputOpr = output.innerText[output.innerText.length-1] == "-" || output.innerText[output.innerText.length-1]=="+" ||
    output.innerText[output.innerText.length-1] == "x"|| output.innerText[output.innerText.length-1]=="/";
    // check if it is empty
    if(output.innerText=='0' && inputs[i].value>0) output.innerText= "";
    // Oration button
    if(inputs[i].value=="del") output.innerText = del(output.innerText);
    else if(inputs[i].value=="reset")reset();
    else if(inputs[i].value=="=") {
      if(isInputOpr) wrongEnter("You have enter wrong parameter");
      else if(output.innerHTML=="") wrongEnter("Please enter correct Opr"); 
      else calc(output.innerText);
    }else if(inputs[i].value=="-" && output.innerHTML=="-")wrongEnter("Wrong");
    // This to check if the input correct.
    else if(
        (isInputOpr && inputs[i].getAttribute("calc-type") == "Oration") || 
        (inputs[i].getAttribute("calc-type") == "Oration" &&(output.innerText==""))
      ){
        let temp=output.innerText.split(" ").join("") ;
        let myValue=temp[temp.length-2];
        let opTemp = (myValue!="-" && myValue!="+" && myValue!="x" && myValue!=`/`);
        if(inputs[i].value=='-' && opTemp)  out(inputs[i].value);
        else wrongEnter("You have enter wrong");        
      }
      // This for enter number
    else if(inputs[i].getAttribute("calc-type") == "Oration") out(" "+inputs[i].value+" \t")
    else out(inputs[i].value);
  })
}

function calc(no){
  no = no.replaceAll(" x ", " * ");
  output.innerText= eval(no);
}
function wrongEnter(msg){
  console.log(msg);
}



/*
/-?[0-9](\+|-|\/|x)-?[0-9]/i
*/