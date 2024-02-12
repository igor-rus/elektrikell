import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.scss";
import Container from "react-bootstrap/Container";
import Body from "./components/Body";
import ErrorModal from "./ErrorModal";
import Head from "./components/Head";
import Footer from "./components/Footer";
import LeftSideBar from "./components/LeftSideBar";
import { useDispatch } from "react-redux";
import { setActiveHour } from "./services/stateService";

function ElectricityPrice() {
  const params = useParams();
  const [showSideBar, setShowSideBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [bestUntil, setBestUntil] = useState(0);
  const handleSideBarClose = () => setShowSideBar(false);
  const handleSideBarOpen = () => setShowSideBar(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if(params.hours) dispatch(setActiveHour(+params.hours))
  }, [dispatch, params.hours]);

  return (
    <Container>
      <Head handleSideBarOpen={handleSideBarOpen} setErrorMessage={setErrorMessage}/>
      <Body setErrorMessage={setErrorMessage} setBestUntil={setBestUntil}/>
      <Footer
        bestUntil={bestUntil}
      />
      <LeftSideBar show={showSideBar} handleClose={handleSideBarClose}
      />
      <ErrorModal show={!!errorMessage} handleClose={() => setErrorMessage(null)} errorMessage={errorMessage}/>
    </Container>
  );
}

export default ElectricityPrice;
