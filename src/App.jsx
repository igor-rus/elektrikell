import { Routes, Route } from "react-router-dom";
import ElectricityPrice from "./ElectricityPrice";
import About from "./About";
import Navigation from "./Navigation";

export const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<ElectricityPrice/>}>
          <Route path="lowprice/:hours" element={<ElectricityPrice />} />
        </Route>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<h1>error 404</h1>}></Route>
      </Routes>
    </>
  )
}

export default App;
