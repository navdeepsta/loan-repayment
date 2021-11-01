function calculateFortNightlyPayment(amount, duration, interest) {
    let monthlyRate = interest / 2600;
    return ( amount * monthlyRate * Math.pow((1+monthlyRate), (duration * 26))) / (Math.pow((1+monthlyRate), (duration * 26)) - 1);
};

function calculateTotalLoanRepaymentFortNightly(duration, fortNightlyPayment) {
    return  (duration * 26 * fortNightlyPayment);
};

function calculateTotalInterestPaymentFortnightly(amount, totalLoanPaymentFortNightly) {
    return  totalLoanPaymentFortNightly - amount;
};

export {calculateFortNightlyPayment, calculateTotalLoanRepaymentFortNightly, calculateTotalInterestPaymentFortnightly}