const display = document.getElementById("display"),
numBtns = document.querySelectorAll(".number"),
opBtns = document.querySelectorAll(".operator"),
equalbtn = document.getElementById("equal"),
clearBtn = document.getElementById("clear"),
squareBtn = document.getElementById("squareBtn"),
doublebtn = document.getElementById("double");

// saving all the user input to usable by java to evaluate
let expression = "";

// for buttons array to asssign event and function to each of the button
function handler(btnArr, btnFn){
    btnArr.forEach(element => {
        element.addEventListener("click", () => {
            btnFn(element);
        })
    });
}


function numFn(btn){
    if (display.value == 0){
    display.value = btn.innerHTML;
    expression += btn.innerHTML;
    console.clear();
    console.log(expression);} else {
        display.value = display.value + btn.innerHTML;
    expression += btn.innerHTML;
    console.clear();
    console.log(expression);
    }
} 
  
function operatorFns(btn){ 
    let lastInput = display.value[display.value.length-1];
    if (display.value == 0){
        display.value += 0 + btn.value;
    } else if (isNaN(lastInput)) {
        if (lastInput != ".")  {
            display.value = display.value.slice(0,-1) + btn.value;
            expression += btn.value;
        }
    } else {
        display.value += btn.value;
        expression += btn.value;
    }

}

function equalFn() {
   display.value = eval(expression);
   expression= display.value;
    
}
function clearFn(){
    display.value = 0;
    expression = 0;
}
function doubleFn(){
    display.value += double.value;
}

function square(){
    expression = eval(display.value);
    expression = expression * expression;
    display.value = expression;
}


squareBtn.addEventListener("click", square);
handler(numBtns, numFn);
handler(opBtns, operatorFns);
equalbtn.addEventListener("click", equalFn);
clearBtn.addEventListener("click", clearFn);
doublebtn.addEventListener("click", doubleFn);
// myBtn.addEventListener("click", numFn);

// btn.addEventListener()
