import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [header, setHeader] = useState({
    title: "Welcome to My Dashboard",
    imageUrl: "",
  });

  const [navbar, setNavbar] = useState([
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ]);

  const [footer, setFooter] = useState({
    email: "example@mail.com",
    phone: "+123456789",
    address: "123 Main St, Colombo",
  });

  return (
    <AppContext.Provider value={{ header, setHeader, navbar, setNavbar, footer, setFooter }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
