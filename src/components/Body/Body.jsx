import {useEffect, useState} from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer
} from "recharts";
import {getMarketPrices} from "../../services/apiService";
import {chartDataConverter} from "../../utils";

const Body = () => {
  const [marketPriceData, setMarketPriceData] = useState(null);


  useEffect(() => {
    getMarketPrices().then(({data}) => {
      let convertedChart = chartDataConverter(data.ee);
      setMarketPriceData(convertedChart)
    });
  }, [])


  return (
    <Row>
      <Col>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={marketPriceData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="hour"/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="price" stroke="#8884d8"/>
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};

export default Body;
