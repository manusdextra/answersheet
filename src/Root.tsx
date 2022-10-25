import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-amber-100 to-amber-300 md:grid md:grid-cols-[25vw_1fr]">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Root;
