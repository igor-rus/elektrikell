import { useState } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./Body";
import Head, { DEFAULT_ACTIVE_PRICE_BUTTON_ID } from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_PRICE_BUTTON_ID);
  const [activeHour, setActiveHour] = useState();
  const [showSideBar, setShowSideBar] = useState(false);
  const handleSideBarClose = () => setShowSideBar(false);
  const handleSideBarOpen = () => setShowSideBar(true);

  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice} handleSideBarOpen={handleSideBarOpen}/>
      <Body activeHour={activeHour} />
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
      />
      <LeftSideBar show={showSideBar} handleClose={handleSideBarClose} />
    </Container>
  );
}

export default App;
