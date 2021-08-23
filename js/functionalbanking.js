function getInputValue(fieldId) {
    let getValueText = document.getElementById(fieldId);
    const getValue = parseFloat(getValueText.value);
    getValueText.value = '';
    return getValue;
};
function updateBalance(fieldId, amount) {
    let previousBalanceTag = document.getElementById(fieldId);
    const previousBalance = parseFloat(previousBalanceTag.innerText);
    const totalUpdatedAmount = amount + previousBalance;
    previousBalanceTag.innerText = totalUpdatedAmount;
    updateTotalBalance()
};
function updateTotalBalance() {
    const depositeAmount = parseFloat(document.getElementById('deposit-total').innerText);
    const withdrawAmount = parseFloat(document.getElementById('withdraw-total').innerText);
    let totalBalanceText = document.getElementById('balance-total');
    const updatedTotalBalance = depositeAmount - withdrawAmount + 1240;
    totalBalanceText.innerText = updatedTotalBalance;
};

document.getElementById('deposit-button').addEventListener('click', function () {
    const inAmount = getInputValue('deposit-amount');
    if (inAmount > 0) {
        updateBalance('deposit-total', inAmount);
    };
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const inAmount = getInputValue('withdraw-amount');
    const totalBalance = document.getElementById('balance-total').innerText;
    if (inAmount > 0 && inAmount < totalBalance) {
        updateBalance('withdraw-total', inAmount);
    };
});