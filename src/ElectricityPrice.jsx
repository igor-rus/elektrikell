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
import ElectricPriceProvider from "./components/contexts/ElectricPriceContext";

function ElectricityPrice() {
  console.log('ElectricPrice');
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.hours) dispatch(setActiveHour(+params.hours))
  }, [dispatch, params.hours]);

  return (
    <ElectricPriceProvider>
      <Container>
        <LeftSideBar/>
        <Head/>
        <Body/>
        <Footer/>
        <ErrorModal/>
      </Container>
    </ElectricPriceProvider>
  );
}

export default ElectricityPrice;
