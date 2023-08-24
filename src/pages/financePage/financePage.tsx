import { Link } from 'react-router-dom';
import './financePage.scss';

const FinancePage = () => {
    
    return (
        <div className="container">
            <h1>Finance Page</h1>
            <Link to="/" style={{ padding: 5 }}>
                To start page
            </Link>
        </div>
    )
}

export default FinancePage;
