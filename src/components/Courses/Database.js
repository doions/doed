import React from "react";
import ReadMore from "./ReadMore";
function Database() {
  return (
    <div className="p-3">
      <h1 className="py-3">Databases & Algorithms.</h1>
      <p>
        <ReadMore>
          An algorithm is a process, defined in code, for carrying out a
          specific task. Searching a data structure is one of the most common
          programming activities and can involve many different types of
          algorithm.
        </ReadMore>
      </p>
    </div>
  );
}

export default Database;
