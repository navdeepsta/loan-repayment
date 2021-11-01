import '../css/loanFormDisplay.css';
export default function LoanForm(props) {
    let {amount, duration, interest} = props.loanForm;
    let handleChange = props.handleChange;
    let handleClick = props.handleClick;    
    return(
            <div className="form-container">
                <label for="amount">Loan amount you would like to borrow</label>
                <div className="input-group input-amount mb-3">
                    <span className="input-group-text">$</span>
                    <input   
                      id="amount"
                      name="amount" 
                      type="text" 
                      value={ amount.toLocaleString()} 
                      onChange={handleChange} 
                      className="form-control" aria-label="Amount (to the nearest dollar)" />
                </div>
                
                <label for="duration">Loan Term (Years)</label>
                <div className="input-group mb-3 input-duration">
                    <input   
                      id = "duration"
                      name="duration"
                      type="number"
                      value={duration}
                      onChange={handleChange} className="form-control" aria-label="Amount (to the nearest dollar)" />
                </div>

                <label for="interest">Interest Plus Principle(p.a%)</label>
                <div className="input-group mb-3 input-interest">
                    <input   
                       id = "interest"
                       name="interest"
                       type="number"
                       value={interest}
                       onChange={handleChange} className="form-control" aria-label="Amount (to the nearest dollar)" />
                      <span class="input-group-text">%</span>
                </div>
                <div className="input-group mb-3">
                    <button name="monthly" onClick={handleClick} className="btn btn-warning me-2 mb-2">Monthly</button>
                    <button name="fortnightly" onClick={handleClick} className="btn btn-warning me-2  mb-2">Fortnightly</button>
                    <button name="weekly" onClick={handleClick} className="btn btn-warning me-2  mb-2">Weekly</button>
                </div>
                
            </div>
  
    );
}