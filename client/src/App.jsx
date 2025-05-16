import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./layout/Main";
import { publicRoutes } from "./routes/PublicRoute";
import { ToastContainer } from "react-toastify";
import { getToken } from "./utils/commonUtils/TokenService";
import { protectedRoutes } from "./routes/ProtectedRoutes";
import PrivateRoute from "./routes/PrivateRoute";
import Loader from "./components/loader/Loader";
import { useSelector } from "react-redux";

const App = () => {
    const token = getToken();
    console.log(token)
    // const { loading } = useSelector((state) => state.loader);
    return (
        <HashRouter>
            <ToastContainer />
             {/* {loading && <Loader />} */}
            <Routes>
                {publicRoutes.map((route, i) => (
                    <Route path={route.path} element={route.element} key={i} />
                ))}
                <Route
                    path="/"
                    element={
                        token ? <Navigate to="/dashboard" /> : <Navigate to="/auth/login" />
                    }
                />
                <Route path="/" element={<Main />}>
                    {protectedRoutes.map((route, i) => (
                        <Route
                            path={route.path}
                            element={<PrivateRoute element={route.element} />}
                            key={i}
                        />
                    ))}
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
