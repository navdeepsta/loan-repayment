import '../css/loanFormDisplay.css';
import {formatPayment}  from '../utilities/helper';
import {calculateTotalLoanRepayment, calculateTotalInterestPayment} from '../service/monthlyPayment'
import { calculateTotalLoanRepaymentFortNightly, calculateTotalInterestPaymentFortnightly } from '../service/fortnightlyPayment';
import {calculateTotalLoanRepaymentWeekly, calculateTotalInterestPaymentWeekly} from '../service/weeklyPayment'

export default function Display(props) {
    let {amount, duration} = props.loanForm;
    let totalLoan, totalInterest, repayment;
    let paymentPlan = props.paymentPlan.charAt(0).toUpperCase()+props.paymentPlan.slice(1);
    if(props.paymentPlan === "monthly") {
        repayment = props.repayment.monthlyRepayment;
        totalLoan = calculateTotalLoanRepayment(duration, repayment);
        totalInterest = calculateTotalInterestPayment(amount, totalLoan);
    }
     
    if(props.paymentPlan === "fortnightly") {
        repayment = props.repayment.fortnightlyRepayment;
        totalLoan = calculateTotalLoanRepaymentFortNightly(duration, repayment);
        totalInterest = calculateTotalInterestPaymentFortnightly(amount, totalLoan);
    }

    if(props.paymentPlan === "weekly") {
        repayment = props.repayment.weeklyPayment;
        totalLoan = calculateTotalLoanRepaymentWeekly(duration, repayment);
        totalInterest = calculateTotalInterestPaymentWeekly(amount, totalLoan);
    }

    if(totalLoan <=0 || totalInterest <=0 || repayment <=0) {
        totalInterest = 0;
        totalLoan = 0;
        repayment = 0;
    }

    return(
            <div className="display-container">
                <div className="mb-3">
                    <label> {paymentPlan} payment you will make </label>
                    <h2>${formatPayment(repayment).toLocaleString()}</h2>
                </div>

                <div className="mb-3">
                    <label>Total Loan Amount</label>
                    <h2>${formatPayment(totalLoan).toLocaleString()}</h2>
                </div>

                <div className="mb-3">
                    <label>Total Interest</label>
                    <h2>${formatPayment(totalInterest).toLocaleString()}</h2>
                </div>

            </div>
    );
}