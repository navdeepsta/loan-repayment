function calculateWeeklyPayment(amount, duration, interest) {
    let monthlyRate = interest / 5200;
    return  (amount * monthlyRate * Math.pow((1+monthlyRate), (duration * 52))) / (Math.pow((1+monthlyRate), (duration * 52)) - 1);  
};

function calculateTotalLoanRepaymentWeekly(duration, weeklyPayment) {
    return (duration * 52 * weeklyPayment);
};


function calculateTotalInterestPaymentWeekly(amount, totalLoanPaymentWeekly) {
    return  totalLoanPaymentWeekly - amount;
};

export {calculateWeeklyPayment, calculateTotalLoanRepaymentWeekly, calculateTotalInterestPaymentWeekly}