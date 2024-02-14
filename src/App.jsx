import { Routes, Route } from "react-router-dom";
import ElectricityPrice from "./ElectricityPrice";
import About from "./components/About";
import Navigation from "./Navigation";

export const App = () => {
  console.log('App');
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<ElectricityPrice/>}>
          <Route path="lowprice/:hours" element={<ElectricityPrice />} />
        </Route>
        <Route path="/about" element={<About/>}>
          <Route path="me" element={<About />} />
          <Route path="gamma" element={<About />} />
        </Route>
        <Route path="*" element={<h1>error 404</h1>}></Route>
      </Routes>
    </>
  )
}

export default App;
