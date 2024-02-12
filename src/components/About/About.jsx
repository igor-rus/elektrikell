import { useLocation } from "react-router-dom";
import Myself from "./Myself";
import Gamma from "./Gamma";

export const About = () => {
  const PATH_PERSONAL = '/about/me';
  const location = useLocation();
  const path  = location.pathname;

  return (
    <>
      {path === PATH_PERSONAL ? <Myself/> : <Gamma/>}
    </>

  )
}

export default About
