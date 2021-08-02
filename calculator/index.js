// HTML Elements

const previousOperandTxt = document.querySelector('.previous-operand');
const currentOperandTxt = document.querySelector('.current-operand');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]');

//Class

class Calculator
{
    constructor(previousOperandTxt,currentOperandTxt)
    {
        this.previousOperandTxt = previousOperandTxt;
        this.currentOperandTxt = currentOperandTxt;
        this.clear();
    }
    clear()
    {
        this.previousOperand = "";
        this.currentOperand = "";
    }
    delete()
    {

    }
    inputNumber(number)
    {
        this.number = number;
        this.currentOperand += this.number;
    }
    inputOperator(operator)
    {        

    }
    compute()
    {
        if(this.operator === undefined) return;
        this.previousOperand = parseFloat(this.previousOperand);
        this.currentOperand = parseFloat(this.currentOperand);
        if(this.operator === "+") this.previousOperand = this.previousOperand + this.currentOperand;
        else if(this.operator === "-") this.previousOperand = this.previousOperand - this.currentOperand;
        else if(this.operator === "*") this.previousOperand = this.previousOperand * this.currentOperand;
        else if(this.operator === "/") this.previousOperand = this.previousOperand / this.currentOperand;
        else if(this.operator === "%") this.previousOperand = this.previousOperand / 100;
        this.previousOperand = this.previousOperand.toString();
        this.currentOperand = "";
        this.operator = undefined;  
    }

    updateDisplay()
    {
        this.previousOperandTxt.value = this.previousOperand;
        this.currentOperandTxt.value = this.currentOperand;
    }
}

const calculator = new Calculator(previousOperandTxt,currentOperandTxt);

console.log(calculator);

// Event Listeners

numberBtn.forEach(btn =>
{
    btn.addEventListener("click", e=>
    {
        calculator.inputNumber(btn.textContent);
        calculator.updateDisplay();
    })
})

operatorBtn.forEach(btn =>
{
    btn.addEventListener("click", e=>
    {
        calculator.inputOperator(btn.textContent);
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener("click", e=>
{
    calculator.compute();
    calculator.updateDisplay();
})


// Function Expressions, Factory Functions and IIFE

// const inputClear = ()=>
// {
//     previousOperandTxt.value = "";
//     currentOperandTxt.value = "";
// }

// const inputDelete = ()=> currentOperandTxt.value = currentOperandTxt.value.slice(0,currentOperandTxt.value.length-1); 

// const inputValue = (e) =>
// {
//     let number = e.target.textContent;
//     let negativeSign = e.target.value;

//     if(number === "." ) checkInputValue.decimalPoint(number);
        
//     else if(negativeSign) checkInputValue.negativeSign(negativeSign); 

//     else checkInputValue.number(number);
// }

// const checkInputValue = (()=>
// {
//     return Object.freeze({

//         decimalPoint : (number)=>
//         {
//             currentOperandTxt.value.includes(number) ? currentOperandTxt.value = currentOperandTxt.value.replace(".", "")
//             : currentOperandTxt.value += number;
//         },

//         negativeSign : (negativeSign)=>
//         {        
//             if(currentOperandTxt.value !== "")
//                 currentOperandTxt.value.includes(negativeSign) ? currentOperandTxt.value = currentOperandTxt.value.replace(negativeSign,"")
//                 : currentOperandTxt.value = negativeSign + currentOperandTxt.value;

//             else if(previousOperandTxt.value !== "")
//                 previousOperandTxt.value.indexOf(negativeSign) === 0 ? previousOperandTxt.value = previousOperandTxt.value.replace(negativeSign,"")
//                 : previousOperandTxt.value = negativeSign + previousOperandTxt.value;
//         },

//         number : (number)=> displayCurrent(number)
//     })
// })();

// const numberFormat = value => new Intl.NumberFormat('en-US',{maximumFractionDigits:20}).format(value);

// const reverseNumberFormat = value => value.replaceAll(',','');

// const inputOperator = (e) =>
// {
//     let operator = e.target.textContent;
    
//     if(previousOperandTxt.value === "" && currentOperandTxt.value === "") return;
    
//     if(operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/")
//     {
//         checkOtherOperator(operator);
//         return;
//     }

//     if(previousOperandTxt.value === "") displayPrevious(operator);

//     if(currentOperandTxt.value !== "") doArithmeticOperation(operator);

//     if(previousOperandTxt.value.includes("+") || previousOperandTxt.value.includes("-") || previousOperandTxt.value.includes("*") ||
//         previousOperandTxt.value.includes("/") || previousOperandTxt.value.indexOf("-") === 0)
//             previousOperandTxt.value = previousOperandTxt.value.slice(0,previousOperandTxt.value.length-1) + operator;
    
//     else previousOperandTxt.value += operator;    
// }

// const doArithmeticOperation = (operator) =>
// {
//     if(currentOperandTxt.value === "") return;

//     let operatorSign = previousOperandTxt.value.slice(previousOperandTxt.value.length-1,previousOperandTxt.value.length);

//     if(operatorSign !== "+" && operatorSign !== "-" && operatorSign !== "*" && operatorSign !== "/") return;

//     previousOperandTxt.value = reverseNumberFormat(previousOperandTxt.value);
//     currentOperandTxt.value = reverseNumberFormat(currentOperandTxt.value);

//     previousOperandTxt.value = previousOperandTxt.value.slice(0,previousOperandTxt.value.length-1);
    
//     checkArithmeticOperator(operatorSign);

//     previousOperandTxt.value = numberFormat(previousOperandTxt.value);

//     if(operator === "+" || operator === "-" || operator === "*" || operator === "/") previousOperandTxt.value += operator;

//     currentOperandTxt.value = "";
// }

// const checkArithmeticOperator = (operatorSign) =>
// {
//     if(operatorSign === "+") getArithmeticOperation.addition();
//     else if(operatorSign === "-")  getArithmeticOperation.subtraction();
//     else if(operatorSign === "*")  getArithmeticOperation.multiplication();
//     else if(operatorSign === "/")  getArithmeticOperation.division();
// }

// const getArithmeticOperation = (()=>
// {
//     return Object.freeze({
//         addition : ()=> previousOperandTxt.value = parseFloat(previousOperandTxt.value) + parseFloat(currentOperandTxt.value),
//         subtraction : ()=> previousOperandTxt.value = parseFloat(previousOperandTxt.value) - parseFloat(currentOperandTxt.value),
//         multiplication : () => previousOperandTxt.value = parseFloat(previousOperandTxt.value) * parseFloat(currentOperandTxt.value),
//         division : ()=>  previousOperandTxt.value = parseFloat(previousOperandTxt.value) / parseFloat(currentOperandTxt.value)
//     })
// })();


// const checkOtherOperator = (operator)=>
// {
//     previousOperandTxt.value = reverseNumberFormat(previousOperandTxt.value);
//     currentOperandTxt.value = reverseNumberFormat(currentOperandTxt.value);
    
//     if(operator === "%") getOtherOperation.percentage();
// }

// const getOtherOperation = (()=>
// {    
//     return Object.freeze({
//         percentage : ()=>
//         {
//             if(currentOperandTxt.value !== "") currentOperandTxt.value = currentOperandTxt.value / 100;
//             else if(previousOperandTxt.value !== "") previousOperandTxt.value = (parseFloat(previousOperandTxt.value) / 100).toString();
//         }
//     })   
// })();
 
// const displayPrevious = (operator) =>
// {
//     previousOperandTxt.value = currentOperandTxt.value;
//     previousOperandTxt.value += operator;
//     currentOperandTxt.value = "";
// }

// const displayCurrent = (number) =>
// {
//     currentOperandTxt.value += number;
//     currentOperandTxt.value = reverseNumberFormat(currentOperandTxt.value);
//     currentOperandTxt.value = numberFormat(currentOperandTxt.value);
// }

// // Event Listeners

// numberBtn.forEach(btn => btn.addEventListener('click',inputValue));
// operatorBtn.forEach(btn => btn.addEventListener('click',inputOperator));
// equalsBtn.addEventListener('click', doArithmeticOperation);
// clearBtn.addEventListener('click',inputClear);
// deleteBtn.addEventListener('click',inputDelete);


