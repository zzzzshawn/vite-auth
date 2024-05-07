import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../lib/appwrite/api";
import { useAuth } from "../../context/AuthProvider";

const Signup = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { checkAuth, setIsLoading } = useAuth();
  const navigate = useNavigate();



  const loginRef = useRef();

  const handleChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    await createUser(currentUser);
    
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
        ref={loginRef}
        className=" px-8 rounded-3xl shadow-2xl max-h-[600px] py-10 flex flex-col justify-center max-lg:max-h-[570px] bg-white "
      >
        <div className="flex justify-center items-center gap-2 mb-8 max-lg:mt-2">
          <img src="/assets/logo.svg" alt="" width={40} />
          <h2 className="text-3xl font-extrabold">Vite-Auth</h2>
        </div>
        <h2 className="text-2xl font-semibold text-center ">
          Create your account
        </h2>
        <p className="text-md text-center mt-2 mb-6 max-sm:text-sm ">
          Welcome! please enter your details
        </p>
        <div className="flex flex-col p-1 font-medium gap-1 ">
          <label htmlFor="name">Name</label>
          <input
            value={currentUser.name}
            onChange={handleChange}
            type="text"
            name="name"
            className="h-8 p-2 focus:outline-none rounded-lg bg-blue-100 shadow-xl "
          />
        </div>
        <div className="flex flex-col p-1 font-medium gap-1 ">
          <label htmlFor="email">Email</label>
          <input
            value={currentUser.email}
            onChange={handleChange}
            type="email"
            name="email"
            className="h-8 p-2 focus:outline-none rounded-lg bg-blue-100 shadow-xl "
          />
        </div>
        <div className="flex flex-col p-1 font-medium gap-1">
          <label htmlFor="password">Password</label>
          <input
            value={currentUser.password}
            onChange={handleChange}
            type="password"
            name="password"
            className="h-8 p-2 focus:outline-none rounded-lg bg-blue-100 shadow-xl "
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-blue-600 px-3 py-1 rounded-2xl font-bold text-lg mt-5 cursor-pointer text-white"
        />

        <p className="text-md text-center mt-4 ">
          Already have an account?
          <Link to="/log-in">
            <span className="font-bold underline text-blue-600">{" "}Login</span>
          </Link>
        </p>
      </form>
    </>
  );
};

export default Signup;
