import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const About = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  console.log(location);

  useEffect(() => {
    if(params.id === '123') {
      navigate('/');
    }

  }, [navigate, params.id]);
  return (
    <>About component</>
  )
}

export default About
