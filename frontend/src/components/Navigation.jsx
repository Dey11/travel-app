import { NavLink } from "react-router-dom";
import {
  HomeSimpleDoor as Home,
  Bell as Chat,
  UserCircle as User,
  PlusCircle as Plus,
} from "iconoir-react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "font-bold" : "";
  };

  return (
    <div className="flex flex-col">
      <nav className="lg:w-[212px] fixed lg:h-screen lg:top-0 lg:left-0 bottom-0 w-full lg:static bg-white border-r border-grey z-20 lg:overflow-y-auto ">
        <ul className="flex flex-row space-x-20 justify-center items-center lg:items-start lg:flex-col lg:space-y-4 lg:space-x-0 lg:px-6 py-3 lg:py-6">
          <li>
            <NavLink
              to="/discover"
              className={`flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded ${getNavLinkClass(
                "/discover"
              )}`}
            >
              <Home />
              <span className="hidden lg:block">Discover</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/message"
              className={`flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded ${getNavLinkClass(
                "/message"
              )}`}
            >
              <Chat />
              <span className="hidden lg:block">Notifications</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={`flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded ${getNavLinkClass(
                "/profile"
              )}`}
            >
              <User />
              <span className="hidden lg:block">Profile</span>
            </NavLink>
          </li>
          <li>
          <div className="hidden lg:block">
          <button
            className="flex flex-row space-x-3 py-1 lg:py-2 px-3 lg:px-6 rounded-full gap-3 bg-black text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <Plus />
            Journey
          </button>
          </div>
            </li>  
            <div className="fixed bottom-14 right-8 lg:hidden  z-20">
        <button
          className="bg-black text-white p-2 rounded-full"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <Plus />
        </button>
    </div>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navigation;
