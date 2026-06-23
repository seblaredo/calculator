let a = null;
let op = null;
let b = null;
let lastCalled = null;
const display = document.querySelector(".screen p");
const keypad = document.querySelector(".keypad"); 

function add(a, b){
    return Number(a) + Number(b);
}

function substract (a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a)*Number(b);
}

function divide(a, b){
    let answer;
    b === "0" ? answer = "Not possible!" : answer = Number(a)/Number(b);
    return answer;
}

function operate(a, op, b){
    let result = 0;
    switch (op){
        case '+': result = add(a, b); break;
        case '-': result = substract(a, b); break;
        case '*': result = multiply(a, b); break;
        case '/': result = divide(a, b); break;
    }
    return result;
}

function addNum(num){
    display.textContent += num;
}

function displayNum(num){
    display.textContent = num;
}

function allClear(){
    console.log("clear!");
    display.textContent = "";
    a = null;
    op = null;
    b = null;
    lastCalled = null;
}

keypad.addEventListener("click", (e)=>{
    let target = e.target;
    let number = "";
    if(target.classList.contains("op")){
        console.log("operator!");
        if(lastCalled === "num" && op === null){
            op = target.id;
            lastCalled = "op";
            a = display.textContent;
        } else if (lastCalled === "num" && op != null){
            b = display.textContent;
            display.textContent = operate(a, op, b);
            a = display.textContent;
            op = target.id;
            lastCalled = "op";
        } else if (lastCalled === "op"){
            op = target.id;
        }
    } else if (target.classList.contains("num")){
        console.log("num!");
        if(lastCalled === null || lastCalled === "num"){
            addNum(target.id);
            lastCalled = "num";
        } else if (lastCalled === "op"){
            display.textContent = "";
            addNum(target.id);
            lastCalled = "num";
        }
    } else if(target.classList.contains("clear")){
        allClear();
    } else if(target.classList.contains("equal")){
        b = display.textContent;
        display.textContent = operate(a, op, b);
        a = display.textContent;
        op = null;
        lastCalled = "op";
    }
})