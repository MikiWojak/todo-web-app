import {
    CheckCircleIcon,
    ArrowRightEndOnRectangleIcon
} from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <header className="flex justify-between w-full h-16 p-4 bg-red-600 text-white">
            <div className="flex items-center gap-2 font-bold">
                <CheckCircleIcon className="size-6" />
                <h1 className="text-2xl">TODO</h1>
            </div>

            <div className="flex items-center">
                <ArrowRightEndOnRectangleIcon className="size-6" />
            </div>
        </header>
    );
};

export default Header;
