import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';

import Login from 'src/views/pages/Login';
import Todos from 'src/views/pages/Todos';
import Profile from 'src/views/pages/Profile';
import Layout from 'src/views/layouts/Layout';

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
