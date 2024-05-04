import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import Login from "./_auth/forms/Login";
import Signup from "./_auth/forms/Signup";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import About from "./components/About";

const App = () => {
  return (
    <main className="text-white bg-black min-h-screen">
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Route>

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
