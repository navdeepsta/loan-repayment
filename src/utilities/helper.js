function formatPayment( payment ) {
    let newPayment = (payment % 1).toFixed(2);
    payment = parseInt(payment);
    return (newPayment >= .50) ? payment + 1 : payment;
}

function removeCommas( amount ) {
    let letters = amount.split('');
    for(let i=0; i < letters.length;++i) {
        if(letters[i] == ',') {
            letters.splice(i, 1);
        }
    }
    let correctAmount = '';
    letters.forEach(x => {
        correctAmount += x;
    });
    return + correctAmount;
} 

function validateAmount( amount ) {
    let flag = true;
    for( let i=0; i < amount.length; ++i) {
      let num = amount.charCodeAt(i)
      if(num >= 48 && num<=57 || num == 44) {
        flag = true;
      }else{
        return false;
      }
    }
    return flag;
}

export {formatPayment, removeCommas, validateAmount}