let resultElm = document.getElementById('output')
let allClear = document.getElementById('all-clear');
let deleteBtn = document.getElementById('delete');
let percentBtn = document.getElementById('percent');
let devideBtn = document.getElementById('devide');
let multiplyBtn = document.getElementById('multiply');
let substractBtn = document.getElementById('substract');
let additionBtn = document.getElementById('addition');
let equalBtn = document.getElementById('equal');
let decimalBtn = document.getElementById('decimal')

let numberBtns = document.querySelectorAll('.number');

// Variable declearation
let result = "";
let oparation = "";
let previousOparend = 0;

//Append number Function

let appendNumber = (number) => {

    if (number === "." && result.includes('.')) {
        return;
    }

    result += number;
    // console.log(typeof result);
    updateDisplay();

}


//Function to update display
const updateDisplay = () => {
    if (oparation) {

        resultElm.innerText = `${previousOparend} ${oparation} ${result}`

    }
    else {
        resultElm.innerText = result;
    }

}

// Function to work delete btn for oparetor
const updateDisplay2 = () => {
    if (oparation === "" && previousOparend !== "") {
        resultElm.innerText = previousOparend;
        result = previousOparend;
        previousOparend = "";
    }
}

//Function to seclect oparetors
let oparetor = (oparetorValue) => {
    if (result === "") return;


    //  Condition to Calculate Result
    if (oparetorValue !== "" && previousOparend !== "") {
        resultCalculatingFunction();
    }
    if (result !== "" && oparetorValue == '%') {
        percentCalculation();
        updateDisplay();
        return;

    }
    oparation = oparetorValue;
    previousOparend = result;  // jokhn e kono oparetor click hocche tkhn e result take previous oparend a pathiye dicchi and result take faka kore dicchi jate next digit ta result a empty string theke add hoi, AND jokhon 5+2 kore abar + debo tkhn same ata resultCalculatingFumction(); call hobe tkhon same process

    result = "";
    updateDisplay();

}

let percentCalculation = () => {
    let percentResult = result / 100;

    result = percentResult.toString();
    oparation = "";
}

// Function for CALCULATION
let resultCalculatingFunction = () => {
    let calculatedResult;
    let num1 = Number(previousOparend);
    let num2 = Number(result);
    // console.log(num1);
    // console.log(`num 1 type ${typeof num1}`);
    // console.log(num2);
    // console.log(`num 1 type ${typeof num2}`);
    // console.log(isNaN(num1));
    // if (isNaN(num1) || isNaN(num2)) return; //??????????????????????????????????
    switch (oparation) {
        case '+':
            calculatedResult = num1 + num2;
            break;

        case '-':
            calculatedResult = num1 - num2;
            break;

        case '*':
            calculatedResult = num1 * num2;
            break;

        case '/':
            calculatedResult = num1 / num2;
            break;

        default:
            return;
    }
    // console.log(oparetor);
    // console.log(typeof oparetor);
    // to check if the final result is contain decimal or not
    if (Number.isInteger(calculatedResult)) {
        result = calculatedResult.toString();
        // console.log(result)
    } else {
        result = calculatedResult.toFixed(2).toString();
        // console.log(result)
    }


    // result = calculatedResult.toString();
    oparation = ""; // oparation empty kora holo karon 3+2 kore abar + tiple sei + er jnne jaiga khali korte hbe
    previousOparend = "";


}

// Event listner on NUMBER Buttons
numberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        appendNumber(e.target.innerText)
    })
});



// Event Listner on Decimal btn 
decimalBtn.addEventListener('click', (e) => {
    appendNumber(e.target.innerText);
})



// EL on EQUAL BUTTON
equalBtn.addEventListener('click', () => {
    if (result === "") return;
    resultCalculatingFunction();
    updateDisplay();
})



// Add EL on All oparetors
additionBtn.addEventListener('click', (e) => {
    oparetor(e.target.innerText);

});

substractBtn.addEventListener('click', (e) => {
    oparetor(e.target.innerText);

})

multiplyBtn.addEventListener('click', (e) => {
    oparetor(e.target.innerText);

})

devideBtn.addEventListener('click', (e) => {

    oparetor(e.target.innerText);
})

percentBtn.addEventListener('click', (e) => {
    oparetor(e.target.innerText);
})



// All Clear EL
allClear.addEventListener('click', (e) => {

    resultElm.innerText = 0;
    result = "";
    previousOparend = "";
    oparation = "";
})

// EL on DELETE Button
deleteBtn.addEventListener('click', () => {
    if (result === "" && previousOparend != "") {
        oparation = "";
        updateDisplay2();
    }
    else {
        result = result.slice(0, -1);
        updateDisplay(); // Remove the last character from the result string
    }

});

// Changing colour while clicking
numberBtns.forEach((btn) => {
    btn.addEventListener('mousedown', () => {
        btn.classList.add('orange-bg');
    });

    btn.addEventListener('mouseup', () => {
        btn.classList.remove('orange-bg');
    });
});

// multiplyBtn.addEventListener('mousedown', down);
// multiplyBtn.addEventListener('mouseup', up);

// devideBtn.addEventListener('mousedown', down);
// devideBtn.addEventListener('mouseup', up);

// additionBtn.addEventListener('mousedown', down);
// additionBtn.addEventListener('mouseup', up);

// substractBtn.addEventListener('mousedown', down);
// substractBtn.addEventListener('mouseup', up);

// function down(){
//     multiplyBtn.classList.add("greenyello-bg")
// }
// function up(){
//     multiplyBtn.classList.remove("greenyello-bg")
// }