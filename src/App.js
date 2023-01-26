import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import EditDoc from "./pages/EditDoc";

function App() {
  return (
    <>
      <Router>
        <main className="py-3">
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/editdoc" element={<EditDoc />} />
            </Routes>
          </Container>
        </main>
      </Router>

      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
