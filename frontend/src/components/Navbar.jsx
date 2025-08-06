import { useContext } from "react";
import { AppContext } from "../context/appContext";

const Navbar = () => {
  const { navbar } = useContext(AppContext);

  return (
    <nav className="bg-white shadow-md rounded-md px-6 py-4 flex justify-center space-x-6 mb-4">
      {navbar.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="text-blue-600 font-semibold hover:underline"
          target="_blank"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
