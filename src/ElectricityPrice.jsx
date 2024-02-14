import { useEffect } from "react";
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
  const dispatch = useDispatch();

  useEffect(() => {
    if(params.hours) dispatch(setActiveHour(+params.hours))
  }, [dispatch, params.hours]);

  return (
    <Container>
      <LeftSideBar />
      <Head />
      <Body />
      <Footer />
      <ErrorModal />
    </Container>
  );
}

export default ElectricityPrice;
