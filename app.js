// error message
const warning = document.getElementById('warning');

// calculation function
const handleCalculation = () => {
    const inputBill = parseInt(document.getElementById('input-bill').value);
    const inputTip = parseInt(document.getElementById('input-tip').value);
    const inputPerson = parseInt(document.getElementById('input-person').value);

    if(validateInput(inputBill) && validateInput(inputTip) && validateInput(inputPerson)){
        warning.innerText = '';
        const totalTip = (inputBill * inputTip) / 100;
        const totalBill = totalTip + inputBill;
        const perPersonBill = totalBill / inputPerson;

        document.getElementById('total-tip').innerText = totalTip.toFixed(2);
        document.getElementById('per-person-bill').innerText = perPersonBill.toFixed(2);
        document.getElementById('total-bill').innerText = totalBill.toFixed(2);
    }
    else{
        warning.innerText = 'Please enter valid amount.';
    }
};

// input validation
const validateInput = (input) => {
    return (/^\d+$/).test(input);
};

// handle reset button
const handleReset = () => {
    warning.innerText = '';
    document.getElementById('input-bill').value = '';
    document.getElementById('input-tip').value = '';
    document.getElementById('input-person').value = '';
    document.getElementById('total-tip').innerText = '0.00';
    document.getElementById('per-person-bill').innerText = '0.00';
    document.getElementById('total-bill').innerText = '0.00';
};