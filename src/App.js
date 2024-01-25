import { useState } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./Body";
import Head, {DEFAULT_ACTIVE_PRICE_BUTTON_ID} from "./Head";
import Footer from "./Footer";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_PRICE_BUTTON_ID);

  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice} />
      <Body/>
      <Footer activePrice={activePrice}/>
    </Container>
  );
}

export default App;
