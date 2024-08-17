import { Outlet } from 'react-router-dom';

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const Layout = () => {
    return (
        <div>
            <Header />

            {/*@TODO min height */}
            <div className="h-screen m-4">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
