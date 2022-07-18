import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Github from "./pages/Github";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Github" element={<Github />} />
      <Route path="ContactUs" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
