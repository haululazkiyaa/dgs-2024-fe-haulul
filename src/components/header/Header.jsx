import { menu } from "../../constants/menu";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src="/images/logo.png" className="h-[32px]" />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="px-6 py-3 rounded-lg shadow-md pl-10"
        />
        <i className="fa-solid fa-magnifying-glass absolute top-4 left-4 text-gray-400"></i>
      </div>
      <nav className="space-x-6 font-medium">
        {menu.map((item) => (
          <button
            key={item.id}
            className={`${
              location.pathname === item.url
                ? "text-[#0D0D0D]"
                : "text-[#989DB0]"
            }
            hover:text-[#0D0D0D]`}
          >
            {item.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Header;
