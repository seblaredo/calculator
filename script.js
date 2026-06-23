let a = null;
let oper;
let b;
let display = document.querySelector(".screen p");

function add(a, b){
    return a + b;
}

function substract (a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    let answer;
    b === 0 ? answer = "Not possible!" : answer = a/b;
    return answer;
}

function operate(a, oper, b){
    let result = 0;
    switch (oper){
        case '+': result = add(a, b);
        case '-': result = substract(a, b);
        case '*': result = multiply(a, b);
        case '/': result = divide(a, b);
    }
    return result;
}

function updateNum(num){
    if(a === null){
        a = num;
    } else {
        b = num;
    }
    display.textContent = a;
}