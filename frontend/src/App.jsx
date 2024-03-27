import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./routes/Home";
import AddComponent from "./routes/Add";
import ViewComponent from "./routes/View";

function App() {
  return (
    <div className="App font-helvetica w-screen h-screen bg-slate-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/add" element={<AddComponent />} />
          <Route path="/view" element={<ViewComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
