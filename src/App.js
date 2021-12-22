import "./App.scss";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Check0utForm from "./components/Check0utForm";
import BaseLayout from "./BaseLayout";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/checkout" element={<Check0utForm />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
