import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const RootLayout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <>
        <Outlet />
        </>
      ) : (
        <>
          <Navigate to="/log-in" />
        </>
      )}
    </>
  );
};

export default RootLayout;
