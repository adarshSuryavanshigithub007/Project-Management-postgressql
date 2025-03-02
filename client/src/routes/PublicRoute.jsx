import ChangePassword from "../authentication/ChangePassword";
import ForgotPassword from "../authentication/ForgotPassword";
import Login from "../authentication/Login";

export const publicRoutes = [
  { path: "auth/login", element: <Login /> },
  { path: "auth/forgotPassword", element: <ForgotPassword /> },
  { path: "auth/changePassword", element: <ChangePassword /> },
];
