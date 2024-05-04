import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const AuthLayout = () => {
  const {isAuthenticated} = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <>
        <Navigate to="/" />        
        </>
      ) : (
        <div className="flex items-center justify-center gap-10 min-h-screen w-full bg-white text-black p-10 max-sm:gap-0 ">
          <section className="max-w-full">
            <Outlet />
          </section>

          <section className="max-w-full">
            <img
              src="/assets/login.jpg"
              alt="login"
              className="max-w-[580px] max-h-screen max-lg:w-[310px] max-sm:hidden"
            />
          </section>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
