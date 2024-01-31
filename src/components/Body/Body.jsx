import { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  Dot
} from "recharts";
import { getMarketPrices } from "../../services/apiService";
import { chartDataConverter } from "../../utils";
import { currentTimestamp } from "../../utils/DateFormatter";

const Body = ({from, until}) => {
  const [marketPriceData, setMarketPriceData] = useState(null);

  const renderDot = (line) => {
    const {
      payload: { timestamp },
    } = line;

    return timestamp === currentTimestamp() ? (
      <Dot {...line}>
        <div></div>
      </Dot>
    ) : null;
  };

  useEffect(() => {
    getMarketPrices(from, until).then(({data}) => {
      let convertedChart = chartDataConverter(data.ee);
      setMarketPriceData(convertedChart)
    });
  }, [from, until])


  return (
    <Row>
      <Col>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={marketPriceData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="hour" interval={1}/>
            <YAxis/>
            <Tooltip/>
            <Line type="stepAfter" dataKey="price" stroke="#8884d8" dot={renderDot}/>
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};

export default Body;
