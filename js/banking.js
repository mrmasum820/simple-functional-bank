function getInputValue(inputId) {
    const inputField = document.getElementById(inputId)
    const amountText = inputField.value
    const amount = parseFloat(amountText)
    //set deposit input empty
    inputField.value = ''
    return amount
}

function updateTotal(totalId, amount) {
    const total = document.getElementById(totalId)
    const totalText = total.innerText
    const previousTotal = parseFloat(totalText)
    total.innerText = previousTotal + amount
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    return previousBalanceTotal
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        //get and update deposit total
        updateTotal('deposit-total', depositAmount)
        //update balance
        updateBalance(depositAmount, true)
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        //get and update withdraw total
        updateTotal('withdraw-total', withdrawAmount)
        //update balace total
        updateBalance(withdrawAmount, false)
    }
    if (withdrawAmount > currentBalance) {
        console.log('you do not have enough money for withdraw')
    }
})
