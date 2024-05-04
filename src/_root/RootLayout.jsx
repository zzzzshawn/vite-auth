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
          <Navigate to="/login" />
        </>
      )}
    </>
  );
};

export default RootLayout;
