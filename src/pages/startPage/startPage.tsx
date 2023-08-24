import { Link } from 'react-router-dom';
import './startPage.scss';

const StartPage = () => {
    
    return (
        <section className="start">
            <h1>Start Page</h1>
            <button>
                <Link to="/main" style={{ padding: 5 }}>
                    Enter
                </Link>
            </button>
        </section>
    )
}

export default StartPage;