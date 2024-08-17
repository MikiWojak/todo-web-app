import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <div className="flex w-100 h-16 p-4 bg-red-600 text-white">
            <h1>TODO</h1>

            <div>
                Todos
            </div>

            <div>
                <ArrowRightEndOnRectangleIcon className="size-6" />
            </div>
        </div>
    );
};

export default Header;
