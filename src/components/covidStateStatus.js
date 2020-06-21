import React from "react";
import { Loading } from "react-simple-chatbot";
import PropTypes from "prop-types";

export const CovidStateStatus = ({ steps, triggerNextStep }) => {
  const [state, setState] = React.useState(null);
  const [error, seterror] = React.useState(false);

  React.useEffect(() => {
    (async function() {
      try {
        const res = await fetch("https://covidnigeria.herokuapp.com/api");
        const data = await res.json();
        console.log(data.data.states);

        setState(data.data.states);
        triggerNextStep();
      } catch (error) {
        seterror(true);
      }
    })();
  }, [steps]);
  if (error) return <p>sorry error getting ciovid info for this state</p>;
  return (
    <div style={{ width: "100%" }}>
      {state &&
        state.map((el) => {
          if (el.state.toLowerCase() == steps[4].value.toLowerCase())
            return (
              <div key={el._id}>
                <p>casesOnAdmission:{el.casesOnAdmission}</p>
                <p>confirmedCases:{el.confirmedCases}</p>
                <p>death:{el.death}</p>
                <p>discharged:{el.discharged}</p>
              </div>
            );
        })}
    </div>
  );
};
