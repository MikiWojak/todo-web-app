import { Outlet } from 'react-router-dom';

import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';

const Layout = () => (
    <div>
        <Header />

        <main className="w-full min-h-[calc(100vh-96px)] p-4">
            <Outlet />
        </main>

        <Footer />
    </div>
);

export default Layout;
