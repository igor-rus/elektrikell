import {useState} from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./components/Body";
import Head, {DEFAULT_ACTIVE_PRICE_BUTTON_ID} from "./components/Head";
import Footer from "./components/Footer";
import LeftSideBar from "./components/LeftSideBar";
import {getDefaultFrom, getDefaultUntil} from "./utils/DateFormatter";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_PRICE_BUTTON_ID);
  const [activeHour, setActiveHour] = useState();
  const [showSideBar, setShowSideBar] = useState(false);
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());
  const handleSideBarClose = () => setShowSideBar(false);
  const handleSideBarOpen = () => setShowSideBar(true);

  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice} handleSideBarOpen={handleSideBarOpen}/>
      <Body activeHour={activeHour} from={from} until={until}/>
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
      />
      <LeftSideBar show={showSideBar} handleClose={handleSideBarClose} from={from} until={until} setFrom={setFrom}
                   setUntil={setUntil}/>
    </Container>
  );
}

export default App;
