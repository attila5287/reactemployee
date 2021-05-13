import React from "react";
import {Animated} from 'react-animated-css';

function ResultList(props) {
  return (
    <div className="row no-gutters align-items-center">
      {props
        .results
        .slice(0,12)
        .map((result) => (
          <div className="col-4" key={result}>
            <Animated
              animationIn="zoomIn"
              animationInDelay={1000}
              isVisible={ true }
            >

              <img
                alt={result}
                className="img-fluid border-0 bg-secondary rounded shadow-lg mb-2"
                src={result}/>

            </Animated>
          </div>
        ))}
    </div>
  );
}

export default ResultList;
