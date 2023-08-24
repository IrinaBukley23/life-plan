import './sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
    return (
        <div className="container">
            <h2>Sidebar</h2>
            <nav style={{ margin: 10 }}>
                <Link to="/main" style={{ padding: 5 }}>
                Main
                </Link>
                <Link to="/finance" style={{ padding: 5 }}>
                Finance
                </Link>
            </nav>
        </div>
    )
}

export default Sidebar;