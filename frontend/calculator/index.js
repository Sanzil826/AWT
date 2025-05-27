const dis1 = document.getElementById("screen1");
const dis2 = document.getElementById("screen2");


let justCalculated = false;

const Allclear=()=>{
    dis1.value="";
    dis2.value="";
    justCalculated=false;
}

let historyStack=[];

const backspace = ()=>{

   if (dis1.value.length > 0) {
    dis1.value = dis1.value.slice(0, -1); // Remove last character
  }
}


const display = (input)=>{
    historyStack.push(dis1.value); 

    const isOperator = /[+\-*/%]/.test(input);
  if (justCalculated) {
    if (isOperator) {
      // Use result as starting point, continue with operator
      dis1.value = dis2.value + input;
      dis2.value="";
    } else {
      // Start fresh with new input
      dis1.value = input;
      dis2.value = "";
    }
    justCalculated = false;
  } else {
    dis1.value += input;
  }
}

const calculate = ()=>{
     try {
    dis2.value = eval(dis1.value);
    justCalculated = true;
  } catch (error) {
    dis2.value = "Error";
    justCalculated = false;
  }
}