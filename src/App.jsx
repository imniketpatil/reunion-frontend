import { useState, useEffect } from "react";
import Layout from "./Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskPage from "./pages/TaskPage";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import OpenProfileMobileContextProvider from "./context/OpenProfileMobileContextProvider.jsx";
import OpenDeleteTaskModelContextProvider from "./context/OpenDeleteTaskModelProvider.jsx";
import OpenEditTaskModelContextProvider from "./context/OpenEditTaskModelContextProvider.jsx";
import OpenAddTaskModelContextProvider from "./context/OpenAddTaskModelContextProvider.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!authToken);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute component={Layout} />,
      children: [
        {
          path: "/",
          element: <PrivateRoute component={TaskPage} />,
        },
      ],
    },
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: isLoggedIn ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return (
    <OpenAddTaskModelContextProvider>
      <OpenEditTaskModelContextProvider>
        <OpenDeleteTaskModelContextProvider>
          <OpenProfileMobileContextProvider>
            <RouterProvider router={router} />
          </OpenProfileMobileContextProvider>
        </OpenDeleteTaskModelContextProvider>
      </OpenEditTaskModelContextProvider>
    </OpenAddTaskModelContextProvider>
  );
}

export default App;
