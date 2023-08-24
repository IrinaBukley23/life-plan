import { Link } from 'react-router-dom';
import './mainPage.scss';

const MainPage = () => {
    
    return (
        <div className="container">
            <h1>Main Page</h1>
            <Link to="/" style={{ padding: 5 }}>
                To start page
            </Link>
        </div>
    )
}

export default MainPage;