import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Header />
      <div className="p-4 pt-20 container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;