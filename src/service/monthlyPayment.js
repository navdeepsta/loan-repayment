function calculateMonthlyLoanRepayment(amount, duration, interest) {
    //  [P x R x (1+R)^N]/[(1+R)^N-1]
    if( amount === 0 || duration === 0 || interest === 0) {
        return 0;
    }
    let monthlyRate = interest / 1200;
    let result =  amount * monthlyRate * Math.pow((1+monthlyRate), (duration * 12)) / (Math.pow((1+monthlyRate), (duration * 12)) - 1);
    return result;
};

function calculateTotalLoanRepayment(duration, monthlyPayment) {
    return  (duration * 12 * monthlyPayment);
};

function calculateTotalInterestPayment(amount, totalLoanPayment) {
    return  totalLoanPayment - amount;
};

export {calculateMonthlyLoanRepayment,calculateTotalLoanRepayment, calculateTotalInterestPayment}