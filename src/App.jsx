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
        {/* public route */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
          <Route path="/about" element={<About />} />

        <Route element={<RootLayout />}>
          <Route path="/" index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
