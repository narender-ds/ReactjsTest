import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Array from "./pages/Array";
import ArrayData from "./pages/ArrayData";
import ArrayOfList from "./pages/ArrayOfList";
import ArrayResult from "./pages/ArrayResult";
import Counter from "./pages/Counter";
import DropdownMenu from "./pages/Json";
import Json from "./pages/Json";
import List from "./pages/List";
import Slides from "./pages/slides";
import FetchApi from "./pages/FetchApi";

function App() {
  return (
    <div className="App">
      {/* <Array />
      <Counter />
      <ArrayOfList />
      <List />
      <Slides />
      <ArrayResult />
      <ArrayData />
      <Json /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<DropdownMenu />} />
          <Route path="/counter/users" element={<Counter />} />
        </Routes>
      </BrowserRouter> */}
      <FetchApi/>
    </div>
  );
}

export default App;
