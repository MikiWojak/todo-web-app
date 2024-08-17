import { JSX, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const AuthLayout = ({ children }: Props): JSX.Element => {
    return <div>{children}</div>;
};

export default AuthLayout;
