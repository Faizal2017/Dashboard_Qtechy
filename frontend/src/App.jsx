import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components//Footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="max-w-full mx-auto ">
      <Header />
    
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
