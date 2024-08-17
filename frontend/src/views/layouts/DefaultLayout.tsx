import { JSX, ReactNode } from 'react';

import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

type Props = {
    children: ReactNode;
};

const DefaultLayout = ({ children }: Props): JSX.Element => {
    return (
        <div>
            <Header />

            <div>{children}</div>

            <Footer />
        </div>
    );
};

export default DefaultLayout;
