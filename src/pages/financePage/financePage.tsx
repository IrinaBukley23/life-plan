import { Link } from 'react-router-dom';
import './financePage.scss';

const FinancePage = () => {
    
    return (
        <section className="container">
            <h1>Finance Page</h1>
            <Link to="/" style={{ padding: 5 }}>
                To start page
            </Link>
        </section>
    )
}

export default FinancePage;
