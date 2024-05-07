function SplitBill() {
    const itemsAmount = parseFloat(document.getElementById('itemsAmount').value);
    const noOfpersons = parseInt(document.getElementById('noOfpersons').value);
    let afterTaxBill = document.getElementById('afterTaxBill');
    const splitAmount = document.getElementById('splitAmount');
    const cgst = document.getElementById('cgst');
    const sgst = document.getElementById('sgst');

    const cgstAmount = itemsAmount * 0.09;
    const sgstAmount = itemsAmount * 0.09;
    const totalBill = itemsAmount + cgstAmount + sgstAmount;

    cgst.innerHTML = `CGST : ${cgstAmount}`;
    sgst.innerHTML = `SGST : ${sgstAmount}`;

    if (isNaN(itemsAmount) || isNaN(noOfpersons) || itemsAmount <= 0 || noOfpersons <= 1) {
        alert('Enter a valid amount (greater than zero), valid No.of persons (must be greater than 1)');
        return;
    }
    else if (document.getElementById('discount').checked) {
        const discount = totalBill - (totalBill * 0.05);
        splitAmount.value = Math.round(discount / noOfpersons);
        afterTaxBill.value = Math.round(discount)
    }
    else {
        const individualAmount = totalBill / noOfpersons;
        afterTaxBill.value = Math.round(totalBill);
        splitAmount.value = (Math.round(individualAmount));
        // splitAmount.value = individualAmount.toFixed(2);
    }
    document.getElementById('itemsAmount').value = '';
    document.getElementById('noOfpersons').value = '';
}