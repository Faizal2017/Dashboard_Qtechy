import { useContext, useEffect } from "react";
import { AppContext } from "./context/appContext";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const { setHeader, setNavbar, setFooter } = useContext(AppContext); // Access the context setters

  // Fetch data from the backend when the component mounts
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
    <div className="max-w-full mx-auto p-2 ">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Dashboard />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
