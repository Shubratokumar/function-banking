// checking whether the js file added with html file or not.
//alert('banking js added.');

// reduce or common function for input field
function getInputValue(inputId){
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

// get current balance using function for validation
function getCurrentBalance(){
    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalText = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

// update balance : reduce or commom function for getting values and update field
function updateBalanceField(balanceAmount, isAdd){
    const balanceTotalAmount = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
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

    

    /* //get and update current deposit from total deposit
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    // use parseFloat method for get a number not string
    const previousDepositTotal = parseFloat(previousDepositText);
    // update new deposit
    depositTotal.innerText =  previousDepositTotal + newDepositAmount; */
    

    /* // update current balance from total deposit
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + newDepositAmount; */

    // call function : input field, new total field & new balance field
    const newDepositAmount = getInputValue('deposit-input');
    // input validation : when input is a negative number as well as a string
    if(newDepositAmount > 0){
        const totalDepositAmount = totalFieldUpdate('deposit-total', newDepositAmount)
        const totalBalance = updateBalanceField(newDepositAmount, true)
    } 
    /* // clean input field
    depositInput.value = ''; */
})

// handle withdraw button
document.getElementById("withdraw-button").addEventListener('click', function(){
    /* // get new withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText); */

    

    /* // get and update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + newWithdrawAmount; */

    

    /* // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount; */

    // call function : input field, new total field & new balance field
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    // input validation : when input is a negative number as well as a string
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        const totalWithdrawAmount = totalFieldUpdate('withdraw-total', newWithdrawAmount)
        const totalBalance = updateBalanceField(newWithdrawAmount, false);
    }
    if(newWithdrawAmount > currentBalance){
        alert('You can not withdraw more than what you have in your account !!!')
    }

    /* // clean withdraw input field
    withdrawInput.value = ''; */
})