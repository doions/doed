import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Fonts/menlo-cufonfonts/Menlo-Regular.ttf";

import Home from "./components/Home/index";
import Header from "./components/Header";
import NoPage from "./components/NoPage/index";
import ContactUs from "./components/ContactUS/index";
import Footer from "./components/Footer";
import Courses from "./components/Courses/AllCourses/index";
import FullStack from "./components/Courses/FullStackCourse/index";
import DigitalMarketing from "./components/Courses/DigitalMarketingCourse/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FullStack" element={<FullStack />} />
          <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <ContactUs />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
