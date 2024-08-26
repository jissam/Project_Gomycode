import "./App.css";
import Model3D from "./Components/Model3D";
import HomePage from "./pages/Home";
import ViewerPage from "./pages/Viewer/Viewer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Viewer" element={<ViewerPage />} />
        <Route path="/model/:modelURN" element={<Model3D />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
