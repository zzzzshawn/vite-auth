import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-5 pt-14 min-h-full relative">
      <div className="">
        <h1 className="text-5xl font-extrabold">Welcome👋</h1>
        <h2 className="text-5xl font-bold mt-2 text-blue-400 ">{user.name}</h2>
        <p className="text-xl mt-2">
          We&apos;re thrilled to have you on board! ✨
        </p>
      </div>

      <h2 className="text-4xl font-bold mt-[100px] ">
        Some other projects to look into
      </h2>
      <div className="rounded-2xl h-full  flex flex-col justify-center items-center">
        <Link
          to="https://socialzz.vercel.app/"
          target="_blank"
          className="flex flex-col items-center border-b p-10 justify-center "
        >
          <img
            src="/assets/socialzz.svg"
            alt="project 1"
            className="max-w-[70%] max-md:min-w-full max-md:px-0 max-md:pt-2 pt-10 px-16"
          />
          <p className="text-xl font-bold text-center hover:text-zinc-600">
            Socialzz: Fully functional social media websites to share photos
          </p>
        </Link>
        <Link
          to="https://tasks-zeta-two.vercel.app/"
          target="_blank"
          className="flex flex-col items-center justify-center "
        >
          <img
            src="/assets/tasks.svg"
            alt="project 1"
            className="w-full max-md:min-w-full max-md:px-0 max-md:pt-2 pt-10 px-16"
          />
          <p className="text-xl font-bold text-center hover:text-blue-600">
            Tasks: A simple application to manage your daily tasks
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
