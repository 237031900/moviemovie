import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/member" element={<></>} />
          <Route index element={<HomePage />} />
          <Route path="/add" element={<></>} />
          <Route path="/edit/:id" element={<></>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
