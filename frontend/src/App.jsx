import { useContext, useEffect } from "react";
import { AppContext } from "./context/appContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  const { setHeader, setNavbar, setFooter } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/components");
      const data = await res.json();

      if (data) {
        setHeader(data.header);
        setNavbar(data.navbar);
        setFooter(data.footer);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Header />
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
