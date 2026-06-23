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