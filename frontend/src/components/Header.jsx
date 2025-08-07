import { useContext } from "react";
import { AppContext } from "../context/appContext";

// Header component to display the main title and an optional image
// It uses the AppContext to get the header data
const Header = () => {
  const { header } = useContext(AppContext); // Access the header data from context

  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-10 px-4 text-center rounded-md shadow-lg  mb-4 -">
      <h1 className="text-4xl font-bold mb-4">{header.title}</h1>
      {header.imageUrl && (
        <img
          src={header.imageUrl}
          alt="Uploaded"
          className="mx-auto max-h-64 rounded-lg shadow"
        />
      )}
    </header>
  );
};

export default Header;
