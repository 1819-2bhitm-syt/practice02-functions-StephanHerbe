function printCalculation(operator, calculate){
    console.log("20 " + operator + " 3 = " + calculate(20, 3));
}

let sum = function(num1, num2){
    return num1 + num2;
}


let difference = function(num1, num2){
    return num1 - num2;
}

let pro = function(num1, num2){
    return num1 * num2;
}

let quo = function(num1, num2){
    return num1 / num2;
}



printCalculation("+", sum);
printCalculation("-", difference);
printCalculation("*", pro);
printCalculation("/", quo);

printCalculation("^", function(num1, num2){
    return num1 ** num2;
});

printCalculation("%", function(num1, num2){
    return num1 % num2;
});

printCalculation(("^"), (num1, num2) => num1 ** num2);

