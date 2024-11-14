let del = str=>str.slice(0,-1);
let out = str=>output.innerHTML+=str;
let result = str=>output.innerText=str;
let reset = ()=>output.innerText="0";
let inputs = document.querySelectorAll("form > *");
console.log(inputs);

inputs.onclick  = ()=>{
  console.log("Hello");
}
for(let i=0; i<inputs.length; i++){
  inputs[i].addEventListener("click", ()=>{
    if(output.innerText==0) output.innerText= "";
    if(inputs[i].value=="del") output.innerText = del(output.innerText);
    else if(inputs[i].value=="reset")reset();
    else if(inputs[i].value=="=") {
      (output.innerText[output.innerText.length-1] == "-" || output.innerText[output.innerText.length-1]=="+" ||
        output.innerText[output.innerText.length-1] == "x"|| output.innerText[output.innerText.length-1]=="/")?
        console.log("You have enter wrong parameter")
      :calc(output.innerText);
    }
    else if(
        ((output.innerText[output.innerText.length-1] == "-" || output.innerText[output.innerText.length-1]=="+" ||
        output.innerText[output.innerText.length-1] == "x"|| output.innerText[output.innerText.length-1]=="/") &&
        inputs[i].getAttribute("calc-type") == "Oration") || 
        (inputs[i].getAttribute("calc-type") == "Oration" &&(output.innerText==0 || output.innerText==""))
      )console.log("You have enter wrong parameter");
    else if(inputs[i].getAttribute("calc-type") == "Oration") out(" "+inputs[i].value+" \t")
    else out(inputs[i].value);
  })
}

function calc(no){
  no = no.replaceAll(" x ", " * ");
  output.innerText= eval(no);
}