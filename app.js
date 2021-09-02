const handleCalculation = () => {
    const inputBill = document.getElementById('input-bill').value;
    const inputTip = document.getElementById('input-tip').value;
    const inputPerson = document.getElementById('input-person').value;

    console.log(validateInput(inputBill));
    
}

const validateInput = (input) => {
    return (/^\d+$/).test(input);
}