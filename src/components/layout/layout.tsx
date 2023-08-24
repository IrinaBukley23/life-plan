import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";

import './layout.scss';

const Layout = () => {
    
    return (
        <div>
            <Header />
            <main className="wrapper">
                <Sidebar />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;