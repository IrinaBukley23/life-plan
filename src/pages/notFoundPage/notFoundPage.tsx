import { Link } from 'react-router-dom';
import './notFoundPage.scss';

const NotFoundPage = () => {
    
    return (
        <div className="container">
            <h1>404 Page</h1>
            <Link to="/" style={{ padding: 5 }}>
                To start page
            </Link>
        </div>
    )
}

export default NotFoundPage;