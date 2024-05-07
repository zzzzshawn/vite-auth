import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../lib/appwrite/api";
import { useAuth } from "../../context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { checkAuth, setIsLoading} = useAuth();

  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setCurrentUser({...currentUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    await loginUser(currentUser);

    const isLoggedIn = await checkAuth();
    if(isLoggedIn ){
      navigate('/')
      setIsLoading(false)
    }
    
  };

  

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" px-8 rounded-3xl shadow-2xl max-h-[600px] py-10 flex flex-col justify-center max-lg:max-h-[570px] bg-white "
      >
        <div className="flex justify-center items-center gap-2 mb-8 max-lg:mt-2">
          <img src="/assets/logo.svg" alt="" width={40} />
          <h2 className="text-3xl font-extrabold">Vite-Auth</h2>
        </div>
        <h2 className="text-2xl font-semibold text-center ">
          Login to your account
        </h2>
        <p className="text-md text-center mt-2 mb-6 max-sm:text-sm ">
          Welcome back! please enter your details
        </p>
        <div className="flex flex-col p-1 font-medium gap-1 ">
          <label htmlFor="name">Email</label>
          <input value={currentUser.email} onChange={handleChange}
            type="email"
            name="email"
            className="h-8 p-2 focus:outline-none rounded-lg bg-blue-100 shadow-xl "
          />
        </div>
        <div className="flex flex-col p-1 font-medium gap-1">
          <label htmlFor="name">Password</label>
          <input value={currentUser.password} onChange={handleChange}
            type="password"
            name="password"
            className="h-8 p-2 focus:outline-none rounded-lg bg-blue-100 shadow-xl "
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-blue-600  hover:bg-blue-700 px-3 py-1 rounded-2xl font-bold text-lg mt-5 cursor-pointer text-white"
        />

        <p className="text-md text-center mt-4 ">
          Don&apos;t have an acount? 
          <Link to="/sign-up">
            {}
            <span className="font-bold underline text-blue-600"> SignUp</span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
