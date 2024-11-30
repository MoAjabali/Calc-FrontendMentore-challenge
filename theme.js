let myToggle= document.querySelector("input[name='theme']");
myToggle.value = window.localStorage.getItem("Theme");
switchColor(parseInt(myToggle.value));
myToggle.onchange = ()=>{
  window.localStorage.setItem("Theme", myToggle.value);
  myToggle.value = window.localStorage.getItem("Theme");
  console.log(myToggle.value);
  switchColor(parseInt(myToggle.value));
}

function switchColor(val){
  switch(val){
    case 1:
      theme("#3b4863", "#242c42", "#171f33", "#637097", "#404e72", "#d03f2f", "hsl(6, 70%, 34%)", 
      "hsl(30, 25%, 89%)", "#b5a59651", "#454b59", "hsl(0, 0%, 100%)",1);
    break;
    case 2:
      theme("hsl(0, 0%, 90%)", "hsl(0, 5%, 81%)", "hsl(0, 0%, 93%)", 
      "hsl(185, 42%, 37%)", "hsl(185, 58%, 25%)", "hsl(25, 98%, 40%)", "hsl(25, 99%, 27%)",
      "hsl(45, 7%, 89%)", "hsl(35, 11%, 61%)", "hsl(60, 10%, 19%)", "hsl(0, 0%, 100%)",2);
    break;
    case 3:
      theme("hsl(268, 75%, 9%)", "hsl(268, 71%, 12%)", "hsl(268, 71%, 12%)", 
      "hsl(281, 89%, 26%)", "hsl(285, 91%, 52%)", "hsl(176, 100%, 44%)", "hsl(177, 92%, 70%)",
      "hsl(268, 47%, 21%)", "hsl(290, 70%, 36%)", "hsl(198, 20%, 13%)", "hsl(0, 0%, 100%)", 3, "hsl(52, 100%, 62%)");
    break;
  }
}

function theme(mainBk,toggleBk,screenBk,KBkD,KShD,KTBk,KShR,KBk,KShG,TD,TW,type,TY){
  let myRoot = document.styleSheets[1].rules[0].style
  myRoot.setProperty("--main-background", mainBk);
  myRoot.setProperty("--toggle-background", toggleBk);
  myRoot.setProperty("--screen-background", screenBk);
  myRoot.setProperty("--key-background-desaturated", KBkD);
  myRoot.setProperty("--key-shadow-desaturated", KShD);
  myRoot.setProperty("--key-toggle-background", KTBk);
  myRoot.setProperty("--key-shadow-red", KShR);
  myRoot.setProperty("--key-background", KBk);
  myRoot.setProperty("--key-shadow-Grayish", KShG);
  myRoot.setProperty("--text-dark", TD);
  myRoot.setProperty("--text-white", TW);
  myRoot.setProperty("--text-yellow", TY);
  
  let header = document.querySelector("main > div:first-child");
  let form = document.querySelector("form")
  // let buttons = document.querySelectorAll("")
  switch(type){
    case 1:
      header.style.color = TW;
      output.style.color = TW;
      document.styleSheets[1].rules[15].style.color = TD;
      document.styleSheets[1].rules[19].style.color = TW;
      break;
    case 2:
      header.style.color = TD;
      output.style.color = TD;
      document.styleSheets[1].rules[15].style.color = TD;
      document.styleSheets[1].rules[19].style.color = TW;
    break;
    case 3:
      header.style.color = TY;
      output.style.color = TY;
      document.styleSheets[1].rules[15].style.color = TY;
      document.styleSheets[1].rules[19].style.color = TD;
    break;
  }
}