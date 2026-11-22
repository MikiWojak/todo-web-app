import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';

import Login from '@/views/pages/Login';
import Todos from '@/views/pages/Todos';
import Profile from '@/views/pages/Profile';
import Layout from '@/views/layouts/Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Todos />} />
            <Route path="profile" element={<Profile />} />

            <Route path="login" element={<Login />} />
        </Route>
    )
);

const App = () => <RouterProvider router={router} />;

export default App;
