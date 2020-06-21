import React from "react";
import { Loading } from "react-simple-chatbot";

export const CovidStateStatus = ({ steps, triggerNextStep }) => {
  const [state, setState] = React.useState(null);
  const [error, seterror] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const inputstate =
    steps[4].value.toLowerCase() == "abuja"
      ? "FCT"
      : steps[4].value.toLowerCase();
  React.useEffect(() => {
    (async function() {
      setLoading(true);
      try {
        const res = await fetch("https://covidnigeria.herokuapp.com/api");
        const data = await res.json();

        setState(data.data.states);
        setLoading(false);
        triggerNextStep();
      } catch (error) {
        seterror(true);
      }
    })();
  }, [steps]);
  if (error) return <p>sorry error getting ciovid info for this state</p>;
  if (loading) return <Loading />;
  return (
    <div style={{ width: "100%" }}>
      {state &&
        state.map((el) => {
          if (el.state.toLowerCase() == inputstate)
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
