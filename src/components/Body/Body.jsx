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
import { useDispatch, useSelector } from "react-redux";
import { setBestUntil, setErrorMessage } from "../../services/stateService";

const Body = () => {
  const [marketPriceData, setMarketPriceData] = useState([]);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  const [loading, setLoading] = useState(false);
  const activeHour = useSelector((state) => state.mainSlice.activeHour);
  const from = useSelector((state) => state.date.from);
  const until = useSelector((state) => state.date.until);
  const dispatch = useDispatch();


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
        dispatch(setErrorMessage(ERROR_MESSAGE));
    })
    .finally(() => setLoading(false));
  }, [from, until, dispatch]);


  useEffect(() => {
    const lowPriceIntervals = getLowestPriceInterval(marketPriceData, activeHour);

    if (lowPriceIntervals) {
      setX1(lowPriceIntervals[0].index);
      setX2(lodash.last(lowPriceIntervals).index + 1);
      dispatch(setBestUntil(lowPriceIntervals[0].timestamp));
    }

  }, [activeHour, dispatch, marketPriceData]);

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
