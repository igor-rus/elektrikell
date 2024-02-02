import React from 'react';
import Countdown from "react-countdown";
import moment from "moment";


const InfoPanel = () => {
  const countdownTime = moment(moment().add(1, 'hour')).valueOf();

  const Finished = () => <strong>NOW</strong>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Finished />;
    } else {
      // Render a countdown
      return <span> {hours}:{minutes}:{seconds} </span>;
    }
  };

  return (
    <>
       <span>
            The best time for this is from 11:00 p.m. to 1:00 a.m., ETA for
            which is:
       </span>
      <Countdown
        date={countdownTime}
        renderer={renderer}
      />
    </>
  );
};

export default InfoPanel;