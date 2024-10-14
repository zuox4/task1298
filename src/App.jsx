import './App.css'
import Root from "./Root/Root.jsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Profile from "./Root/Profile/Profile.jsx";
import Login from "./Login.jsx";
import Tasks from "./Root/TaskShop/Tasks.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element:
        <ProtectedRoute elem={<Root />}></ProtectedRoute>,


        errorElement: <ErrorPage />,
        // loader: rootLoader,
        // action: rootAction,
        children: [
            {
                path: "profile",
                element: <ProtectedRoute elem={<Profile />}/>,
            },
            {
                path: "tasks",
                element: <ProtectedRoute elem={ <Tasks />}/>,
            }
                ],
    },
    {
        path: "/login",
        element: <Login/>
    }
]);
function App() {


  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
