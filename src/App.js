import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Mainpage from "./pages/MainPage";
import TodoInput from "./pages/TodoInputPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todoinput" element={<TodoInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
