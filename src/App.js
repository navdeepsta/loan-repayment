import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {validateAmount ,removeCommas}  from './utilities/helper';
import {calculateMonthlyLoanRepayment} from './service/monthlyPayment'
import {calculateFortNightlyPayment} from './service/fortnightlyPayment'
import { calculateWeeklyPayment } from './service/weeklyPayment';
import LoanForm from './components/LoanForm';
import Display from './components/Display';

function App() {
  const [ loanForm, setLoanForm ] = useState(
        {
          amount: 300000,
          duration: 30,
          interest: 2.69
        }
  );
  let {amount, duration, interest} = loanForm;
  let repayment = {
    monthlyRepayment : calculateMonthlyLoanRepayment(amount, duration, interest),
    fortnightlyRepayment : calculateFortNightlyPayment(amount, duration, interest),
    weeklyPayment : calculateWeeklyPayment(amount, duration, interest)
  };
  
  const [ paymentPlan, setPaymentPlan ] = useState("monthly");

  function handleChange( {target} ) {
    const { name, value } = target;
    if(name == 'amount') {
      if(validateAmount( value )) {
        setLoanForm((prev) => ({
          ...prev,
          [name]: removeCommas(value)
        }));
      }
    } else {
        setLoanForm((prev) => ({
          ...prev,
          [name]: removeCommas(value)
        }));
      }
  }

  function handleClick({target}) {
    switch(target.name) {
      case "monthly":
        setPaymentPlan("monthly");
        break;
      case "fortnightly":
        setPaymentPlan("fortnightly");
        break;
      case "weekly":
        setPaymentPlan("weekly");
        break;
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
            <div className="row">
              <div className="col-sm-6 d-flex justify-content-center">
                <LoanForm 
                  loanForm={loanForm} 
                  handleChange={handleChange} 
                  handleClick={handleClick}
                />
              </div>
              <div className="col-sm-6 d-flex justify-content-center">
                <Display loanForm={loanForm} repayment={repayment} paymentPlan={paymentPlan}/>
              </div>
            </div>
      </div>
    </div>
  );
}

export default App;
