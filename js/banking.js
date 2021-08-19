document.getElementById('deposit-button').addEventListener('click', () => {
    var depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        update(depositAmount, 'deposit-total', true)
    } else {
        alert("Invalid deposit amount!!!!")
    }
})



document.getElementById('withdraw-button').addEventListener('click', () => {
    var withdrawAmount = getInputValue('withdraw-input')

    if (withdrawAmount > 0) {
        update(withdrawAmount, 'withdraw-total', false)
    } else {
        alert("Invalid withdraw amount!!!!")
    }

})


function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputValue = Number(inputField.value);
    inputField.value = ''
    return inputValue;
}


function update(amount, id, isAdd) {
    var totalElement = document.getElementById(id)
    var balanceTotalElement = document.getElementById('balance-total')
    var previousBalanceTotalAmount = Number(balanceTotalElement.innerText);

    var previousTotal = Number(totalElement.innerText);




    if (isAdd) {
        var currentTotalBalance = amount + previousBalanceTotalAmount
        balanceTotalElement.innerText = currentTotalBalance;
        var totalAmount = previousTotal + amount
        totalElement.innerText = totalAmount;

    } else if (previousBalanceTotalAmount >= amount) {
        var currentTotalBalance = previousBalanceTotalAmount - amount;
        balanceTotalElement.innerText = currentTotalBalance;
        var totalAmount = previousTotal + amount
        totalElement.innerText = totalAmount;

    } else {
        alert("You don't have enough balance!!")
    }

}