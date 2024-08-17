import {
    SunIcon,
    CheckCircleIcon,
    ArrowRightEndOnRectangleIcon
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Header = () => {
    // @TODO Logic

    return (
        <header className="flex justify-between w-full h-16 p-4 bg-red-600 text-white">
            <Link
                to="/"
                className="flex items-center gap-2 hover:text-gray-300"
            >
                <CheckCircleIcon className="size-6" />
                <h1 className="font-bold text-2xl">TODO</h1>
            </Link>

            <div className="flex items-center gap-4">
                {/*@TODO Toggle light / dark mode*/}
                <button className="hover:text-gray-300">
                    {/*@TODO MoonIcon*/}
                    <SunIcon className="size-6" />
                </button>

                <Link to="login" className="hover:text-gray-300">
                    {/*@TODO UserCircleIcon*/}
                    <ArrowRightEndOnRectangleIcon className="size-6" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
