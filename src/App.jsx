import { Suspense } from "react";
import "./App.css";

import Website from "./pages/Website";
import Properties from "./pages/Properties/Properties";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Website />} />
            <Route path='/properties' element={<Properties />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
