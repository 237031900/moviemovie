import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./components/Layout";
import CinemaList from "./page/CinemaList";
import Detail from "./page/Detail";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/cinema" element={<CinemaList />} />
          <Route index element={<HomePage />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
