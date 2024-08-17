import {
    CheckCircleIcon,
    ArrowRightEndOnRectangleIcon
} from '@heroicons/react/24/solid';

const Header = () => {
    return (
        <div className="flex justify-between w-full h-16 p-4 bg-red-600 text-white">
            <div className="flex items-center gap-2 font-bold">
                <CheckCircleIcon className="size-6" />
                <h1 className="text-2xl">TODO</h1>
            </div>

            <div className="flex items-center gap-2">
                <div>Todos</div>

                <div>
                    <ArrowRightEndOnRectangleIcon className="size-6" />
                </div>
            </div>
        </div>
    );
};

export default Header;
