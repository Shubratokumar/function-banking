// checking whether the js file added with html file or not.
//alert('banking js added.');

// reduce or common function for input field
function getInputValue(inputId){
    //debugger; // for debugging with browser console
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputValue = parseFloat(inputAmountText);
    // clean input field after getting the values.
    inputField.value = '';
    return inputValue;
}

// reduce or common function for every time added value and update 
function totalFieldUpdate(newTotal, newAmount){
    const totalAmountField = document.getElementById(newTotal);
    const totalAmountFieldText = totalAmountField.innerText;
    // use parseFloat method for get a number not string
    const previousTotalAmount = parseFloat(totalAmountFieldText);
    // update new total amount
    totalAmountField.innerText =  previousTotalAmount + newAmount;
}

// reduce or commom function for getting values and update field
function updateBalanceField(balanceAmount, isAdd){
    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalText = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // update new balance using conditions
    if(isAdd == false){
        // condition for substract
        balanceTotalAmount.innerText = previousBalanceTotal - balanceAmount;
    } 
    else{
        // condition for add
        balanceTotalAmount.innerText = previousBalanceTotal + balanceAmount;
    }
    
}

// handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    // get new deposit amount
    /* const depositInput = document.getElementById('deposit-input');
    // get deposit amount value
    const newDepositAmountText = depositInput.value;
    //use parseFloat method for get a number not string
    const newDepositAmount = parseFloat(newDepositAmountText); */

    // call function : input field
    const newDepositAmount = getInputValue('deposit-input');

    /* //get and update current deposit from total deposit
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    // use parseFloat method for get a number not string
    const previousDepositTotal = parseFloat(previousDepositText);
    // update new deposit
    depositTotal.innerText =  previousDepositTotal + newDepositAmount; */

    // call function : new total field
    const totalDepositAmount = totalFieldUpdate('deposit-total', newDepositAmount)

    /* // update current balance from total deposit
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + newDepositAmount; */

    // call function : new balance field
    const totalBalance = updateBalanceField(newDepositAmount, true)
    /* // clean input field
    depositInput.value = ''; */
})

// handle withdraw button
document.getElementById("withdraw-button").addEventListener('click', function(){
    /* // get new withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText); */

    // call function : input field
    const newWithdrawAmount = getInputValue('withdraw-input');

    /* // get and update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount; */

    // call function : new total field
    const totalWithdrawAmount = totalFieldUpdate('withdraw-total', newWithdrawAmount)

    /* // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount; */

    // call function : new balance field
    const totalBalance = updateBalanceField(newWithdrawAmount, false);

    /* // clean withdraw input field
    withdrawInput.value = ''; */
})