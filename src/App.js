import {useState} from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./components/Body";
import ErrorModal from "./ErrorModal";
import Head, {DEFAULT_ACTIVE_PRICE_BUTTON_ID} from "./components/Head";
import Footer from "./components/Footer";
import LeftSideBar from "./components/LeftSideBar";
import {getDefaultFrom, getDefaultUntil} from "./utils/dates";

function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_PRICE_BUTTON_ID);
  const [activeHour, setActiveHour] = useState(1);
  const [showSideBar, setShowSideBar] = useState(false);
  const [from, setFrom] = useState(getDefaultFrom());
  const [until, setUntil] = useState(getDefaultUntil());
  const [errorMessage, setErrorMessage] = useState(null);
  const [bestUntil, setBestUntil] = useState(0);

  const handleSideBarClose = () => setShowSideBar(false);
  const handleSideBarOpen = () => setShowSideBar(true);

  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice}
            handleSideBarOpen={handleSideBarOpen} setErrorMessage={setErrorMessage}/>
      <Body
        activeHour={activeHour}
        from={from}
        until={until}
        setErrorMessage={setErrorMessage}
        setBestUntil={setBestUntil}/>
      <Footer
        activePrice={activePrice}
        activeHour={activeHour}
        setActiveHour={setActiveHour}
        bestUntil={bestUntil}
      />
      <LeftSideBar show={showSideBar}
                   handleClose={handleSideBarClose}
                   from={from}
                   until={until}
                   setFrom={setFrom}
                   setUntil={setUntil}
      />
      <ErrorModal show={!!errorMessage} handleClose={() => setErrorMessage(null)} errorMessage={errorMessage}/>
    </Container>
  );
}

export default App;
