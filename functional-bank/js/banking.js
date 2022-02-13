function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field 
    inputField.value = "";
    return amountValue;
}


function updateTotalField(totalFieldId, Amount) {
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + Amount;
}


function getCurrentBalnce() {
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBlanceTotal = parseFloat(balanceTotalText);
  return previousBlanceTotal;
}


function updateBalance(Amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  /* const balanceTotalText = balanceTotal.innerText;
  const previousBlanceTotal = parseFloat(balanceTotalText); */
  const previousBlanceTotal = getCurrentBalnce();
  if (isAdd == true) {
    balanceTotal.innerText = previousBlanceTotal + Amount;
  }
  else {
    balanceTotal.innerText = previousBlanceTotal - Amount;
  }
}




document.getElementById("deposit-button").addEventListener("click", function () {

  const depositAmount = getInputValue("deposit-input");
  if (depositAmount > 0) {
    // get current deposit 
    updateTotalField("deposit-total", depositAmount)
  
    /*  //    get and update deposit total */
    updateBalance(depositAmount, true);
  }
    
});


  // handle withdraw balance
  document.getElementById("withdraw-button").addEventListener("click", function () {
    //  get and update  withdrew total
    const withdrawAmount = getInputValue("withdraw-input");
    const CurrentBalnce = getCurrentBalnce();
    if (withdrawAmount > 0 && withdrawAmount < CurrentBalnce) {
      updateTotalField("withdraw-total", withdrawAmount)

      /*   //   update balance after balance withdraw  */
        updateBalance(withdrawAmount, false);
    }

    if (withdrawAmount > CurrentBalnce) {
      console.log("Your Balance is Low")
    }
})
