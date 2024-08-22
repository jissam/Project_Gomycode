import "./App.css";
import HomePage from "./pages/Home";
import ViewerPage from "./pages/Viewer/Viewer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Viewer" element={<ViewerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
