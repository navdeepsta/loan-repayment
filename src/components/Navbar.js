import logo from '../images/calculator.svg';
import '../css/navbar.css';
export default function Navbar() {
    return(
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="" width="30" height="30" class="d-inline-block align-text-top" />  
                <span id="loan-title">Loan Repayment Calculater </span>
            </a>
        </div>
    </nav>   
    );
}