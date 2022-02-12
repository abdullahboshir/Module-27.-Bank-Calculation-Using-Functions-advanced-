document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // get current deposit 
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    // clear input field 
    depositInput.value = "";


    //    update balance
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBlanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBlanceTotal + depositAmount;
    
})


  // handle withdraw balance
  document.getElementById("withdraw-button").addEventListener("click", function () {
      const withdrawInput = document.getElementById("withdraw-input");
      const withdrawAmountText = withdrawInput.value;
      const withdrawAmount = parseFloat(withdrawAmountText);
      withdrawInput.value = "";
    //   withdrew 
      const withdrawTotal = document.getElementById("withdraw-total");
      const previousWithdrawTotalText = withdrawTotal.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
      withdrawTotal.innerText = withdrawAmountText;
      withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;    

    //   update balance after balance withdraw
      const balanceTotal = document.getElementById("balance-total");
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
      balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
      console.log(balanceTotalText)
})
