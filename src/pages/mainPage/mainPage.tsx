import { Link } from 'react-router-dom';
import './mainPage.scss';

const MainPage = () => {
    
    return (
        <section className="container">
            <h1>Main Page</h1>
            <Link to="/" style={{ padding: 5 }}>
                To start page
            </Link>
        </section>
    )
}

export default MainPage;