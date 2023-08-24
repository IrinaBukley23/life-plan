import { Link } from 'react-router-dom';
import './notFoundPage.scss';

const NotFoundPage = () => {
    
    return (
        <section className="container">
            <h1>404 Page</h1>
            <Link to="/" style={{ padding: 5 }}>
                To start page
            </Link>
        </section>
    )
}

export default NotFoundPage;