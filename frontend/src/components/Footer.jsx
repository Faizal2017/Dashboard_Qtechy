import { useContext } from "react";
import { AppContext } from "../context/appContext.jsx";

const Footer = () => {
  const { footer } = useContext(AppContext);

  return (
    <footer className="bg-gray-800 text-white p-6 rounded-md mt-10 text-center">
      <p>📧 Email: {footer.email}</p>
      <p>📞 Phone: {footer.phone}</p>
      <p>🏠 Address: {footer.address}</p>
    </footer>
  );
};

export default Footer;
