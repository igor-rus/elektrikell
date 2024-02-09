import { useEffect, useState, useMemo, useCallback } from "react";

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
  ReferenceArea,
  ReferenceLine,
} from "recharts";
import { getMarketPrices } from "../../services/apiService";
import { chartDataConverter } from "../../utils";
import { currentTimestamp } from "../../utils/dates";
import { getLowestPriceInterval } from "../../utils/buildIntervals";
import { getAveragePrice } from "../../utils/math";

import { ERROR_MESSAGE } from "./constants";

import lodash from "lodash";
import LoadingSpinner from "../Spinner";

const Body = ({activeHour, from, until, setErrorMessage, setBestUntil}) => {
  const [marketPriceData, setMarketPriceData] = useState([]);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [loading, setLoading] = useState(false);

  const averagePrice = useMemo(() => {
    if (marketPriceData) {
      return getAveragePrice(marketPriceData)
    }
  }, [marketPriceData]);


  const renderDot = useCallback((line) => {
    const {
      payload: {timestamp},
    } = line;

    return timestamp === currentTimestamp() ? (
      <Dot {...line}>
        <div></div>
      </Dot>
    ) : null;
  }, []);


  useEffect(() => {
    setLoading(true);
    getMarketPrices(from, until).then(({data, success}) => {
      if (!success) throw new Error();

      const priceData = chartDataConverter(data.ee);
      setMarketPriceData(priceData);
    })
    .catch(() => {
        setErrorMessage(ERROR_MESSAGE)
    })
    .finally(() => setLoading(false));
  }, [from, until, setErrorMessage]);


  useEffect(() => {
    const lowPriceIntervals = getLowestPriceInterval(marketPriceData, activeHour);

    if (lowPriceIntervals) {
      setX1(lowPriceIntervals[0].index);
      setX2(lodash.last(lowPriceIntervals).index + 1);
      setBestUntil(lowPriceIntervals[0].timestamp)
    }

  }, [activeHour, marketPriceData, setBestUntil]);

  return (
    <Row>
      <Col>
        {
          loading ? <LoadingSpinner/> : (<ResponsiveContainer width="100%" height={400}>
            <LineChart data={marketPriceData}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="hour" interval={1}/>
              <YAxis/>
              <Tooltip/>
              <Line type="stepAfter" dataKey="price" stroke="#8884d8" dot={renderDot}/>
              <ReferenceLine y={averagePrice} stroke="red" strokeDasharray="3 3"/>
              <ReferenceArea x1={x1} x2={x2} stroke="green" strokeOpacity={0.1}/>
            </LineChart>
          </ResponsiveContainer>)
        }
      </Col>
    </Row>
  );
};

export default Body;
