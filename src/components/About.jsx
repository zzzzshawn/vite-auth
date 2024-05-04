import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto py-8 w-[800px]">
      <h1 className="text-3xl font-extrabold mb-4 border inline-block p-2 rounded-lg bg-white bg-opacity-10">
        About
      </h1>

      <div className="mb-4 border p-3 rounded-lg bg-white bg-opacity-10">
        <h2 className="text-2xl font-bold mb-2">Overview</h2>
        <p className="text-lg font-medium mt-5">
          Welcome to the About page of my Vite-Auth Authentication System!👋😎
          Our authentication system is built using{" "}
          <Link to="https://appwrite.io/">
            <img
              src="/src/assets/appwriteio.svg"
              className="inline-block h-12"
            />
          </Link>
          , an open-source platform for building web🌐 and mobile📱 applications
          . With this system, users can register an account, log in securely,
          and access protected routes within the application.
        </p>
      </div>

      <div className="mb-4 border p-3 rounded-lg bg-white bg-opacity-10">
        <h2 className="text-2xl font-bold mb-2">Features</h2>
        <ul>
          <li className="text-lg font-medium">
            - 👤User Registration: Users can sign up for an account using their
            email and password.
          </li>
          <li className="text-lg font-medium">
            - 📲User Login: Registered users can log in securely with their
            credentials.
          </li>
          <li className="text-lg font-medium">
            - 📤User Logout: Users can log out of their accounts to securely end
            their sessions.
          </li>
          <li className="text-lg font-medium">
            - 🚫Protected Routes: Certain routes in the application are
            protected and can only be accessed by authenticated users.
          </li>
          <li className="text-lg font-medium">
            - ⌚Authentication Persistence: User authentication is persisted
            using Appwrite sessions, providing a seamless experience across
            sessions.
          </li>
        </ul>
      </div>

      <div className="mb-4 border p-3 rounded-lg bg-white bg-opacity-10">
        <h2 className="text-2xl font-bold mb-2">Technologies Used</h2>
        <ul>
          <li className="text-lg font-medium">
            Frontend:{" "}
            <img
              src="/src/assets/vite.svg"
              alt=""
              className="h-4 inline-block "
            />{" "}
            Vitejs,{" "}
            <img
              src="/src/assets/react-router-monotone-inverted.svg"
              alt=""
              className="inline-block h-4"
            />
          </li>
          <li className="text-lg font-medium">
            Backend:{" "}
            <Link to="https://appwrite.io/">
              <img
                src="/src/assets/appwriteio.svg"
                className="inline-block h-12"
              />
            </Link>
          </li>
          <li className="text-lg font-medium">
            Styling:{" "}
            <img
              src="/src/assets/tailwindcss-logotype-white.svg"
              className="inline-block h-4"
            />{" "}
          </li>
        </ul>
      </div>

      <div className="mb-4 border p-3 rounded-lg bg-white bg-opacity-10">
        <h2 className="text-2xl font-bold mb-2">
          About{" "}
          <Link to="https://appwrite.io/">
            <img
              src="/src/assets/appwriteio.svg"
              className="inline-block h-12"
            />
          </Link>
        </h2>
        <p className="text-lg font-medium">
          <Link
            to="https://appwrite.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Appwrite
          </Link>{" "}
          is a secure end-to-end backend server for Web, Mobile, and Flutter
          developers that is packaged as a set of Docker containers for easy
          deployment. It provides features like authentication, databases,
          storage, and more, allowing developers to focus on building great
          applications without worrying about server management.
        </p>
      </div>

      <div className="mb-4 border p-3 rounded-lg bg-white bg-opacity-10">
        <h2 className="text-2xl font-bold mb-2">About Us</h2>
        <p className="text-lg font-medium">
          I am a passionate developer dedicated to creating innovative and
          user-friendly applications. My goal is to provide a seamless and
          secure authentication experience for the users.🙋‍♂️
        </p>
      </div>

      <div className="mb-4 border p-3 rounded-lg bg-white bg-opacity-10">
        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
        <p className="text-lg font-medium">
          If you have any questions, feedback, or suggestions, feel free to
          reach out to us!
        </p>
        <ul className="text-lg font-medium">
          <li>
            ✉️:{" "}
            <Link to="mailto:shawndsilva.mail@gmail.com">
              shawndsilva.mail@gmail.com
            </Link>
          </li>
          <li>
            <img
              src="/src/assets/github-mark-white.png"
              className="inline-block h-6"
            />{" "}
            :{" "}
            <Link
              to="https://github.com/zzzzshawn"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/zzzzshawn
            </Link>
          </li>
        </ul>
        <p className="text-lg font-medium mt-5 ">
          Thank you for using Vite-Auth!
        </p>
      </div>
    </div>
  );
};

export default About;
