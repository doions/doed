import "./App.css";

import WhatWeDo from "./components/ContentPage/WhatWeDo";
import HowCanYGS from "./components/ContentPage/HowCanYGS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Fonts/menlo-cufonfonts/Menlo-Regular.ttf";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header";
import NoPage from "./components/ContentPage/NoPage";
import SecFour from "./components/Homepage/SecFour";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="/WhatWeDo" element={<WhatWeDo />} />
          <Route path="/SecFour" element={<SecFour />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
