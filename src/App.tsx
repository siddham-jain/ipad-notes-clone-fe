import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import '@mantine/core/styles.css';
import { MantineProvider, AppShell } from '@mantine/core';

import Home from '@/screens/home';
import LoginPage from '@/screens/auth/LoginPage';
import SignupPage from '@/screens/auth/SignupPage';
import Navbar from '@/components/layout/Navbar';

import '@/index.css';

// Define a RootLayout component
const RootLayout = () => {
    return (
        <AppShell header={{ height: 60 }}>
            <AppShell.Header>
                <Navbar />
            </AppShell.Header>
            <AppShell.Main>
                <Outlet /> {/* Child routes will render here */}
            </AppShell.Main>
        </AppShell>
    );
};

const router = createBrowserRouter([
    {
        element: <RootLayout />, // RootLayout contains Navbar and Outlet
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/signup',
                element: <SignupPage />,
            },
        ],
    },
]);

const App = () => {
    return (
        <MantineProvider>
            <RouterProvider router={router} />
        </MantineProvider>
    );
};

export default App;
