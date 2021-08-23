document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit amount
    const depositInput = document.getElementById('deposit-amount')
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    const currentDepositText = depositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositText)
    const newDepositTotal = currentDepositAmount + newDepositAmount;
    // console.log(newDepositTotal);
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // console.log(previousBalanceTotal);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear deposit input field
    depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw amount
    const withdrawInputText = document.getElementById('withdraw-amount')
    const withdrawInputAmountText = withdrawInputText.value;
    const withdrawInputAmount = parseFloat(withdrawInputAmountText);

    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText;

    const withdrawTotalAmount = parseFloat(withdrawTotalText)
    const newWithdrawTotal = withdrawInputAmount + withdrawTotalAmount;
    // console.log(newWithdrawTotal);

    withdrawTotal.innerText = newWithdrawTotal;

    // console.log(withdrawInputAmount);

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // console.log(previousBalanceTotal);
    const newBalanceTotal = previousBalanceTotal - withdrawInputAmount;
    balanceTotal.innerText = newBalanceTotal;

    withdrawInputText.value = '';
})