import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <div className="flex-column min-h-screen bg-gradient-to-tl from-amber-100 to-amber-300 py-6">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
