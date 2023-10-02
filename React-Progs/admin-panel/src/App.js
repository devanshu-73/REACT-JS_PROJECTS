import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Comp/Header";
import Footer from "./Comp/Footer";
import Main from "./Comp/Main";
// import Sidebar from "./Comp/Sidebar";
function App() {
  return (
    <BrowserRouter>
      <Routes><Route exact path="/" element={<> <Header /><Main /><Footer /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
