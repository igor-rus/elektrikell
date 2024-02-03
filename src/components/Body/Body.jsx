import { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  LineChart,
  CartesianGrid,
  Dot,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
  ReferenceArea, ReferenceLine,
} from "recharts";
import { getMarketPrices } from "../../services/apiService";
import { chartDataConverter } from "../../utils";
import { currentTimestamp } from "../../utils/dates";
import { getLowestPriceInterval } from "../../utils/buildIntervals";
import lodash from "lodash";

const Body = ({activeHour, from, until}) => {
  const [marketPriceData, setMarketPriceData] = useState([]);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [average, setAverage] = useState(0);

  const renderDot = (line) => {
    const {
      payload: {timestamp},
    } = line;

    return timestamp === currentTimestamp() ? (
      <Dot {...line}>
        <div></div>
      </Dot>
    ) : null;
  };

  useEffect(() => {
    getMarketPrices(from, until).then(({data}) => {
      const priceData = chartDataConverter(data.ee);

      setMarketPriceData(priceData);
    });
  }, [from, until]);


  useEffect(() => {
    const lowPriceIntervals = getLowestPriceInterval(marketPriceData, activeHour);

    if (lowPriceIntervals) {
      setX1(lowPriceIntervals[0].index);
      setX2(lodash.last(lowPriceIntervals).index + 1);
      setAverage(lowPriceIntervals[0].average)
    }

  }, [activeHour, marketPriceData]);

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
            <ReferenceLine segment={[{ x: x1, y: average },{ x: x2, y: average }]} stroke="red" strokeDasharray="3 3" />
            <ReferenceArea x1={x1} x2={x2} stroke="green" strokeOpacity={0.1}/>
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  );
};

export default Body;
