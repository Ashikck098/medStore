import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import SingleView from "./pages/SingleView"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/singlePage/:id" element={<SingleView/>} />
      </Routes>
    </div>
  );
}

export default App;
