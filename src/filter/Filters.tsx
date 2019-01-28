import * as React from "react";

const Filters: React.SFC = props => {
  // Hard code for now
  let filters = ["CDMP", "CHAS", "ISP"];

  return (
    <div className='filters'>
      <div className='filter-title'>Supported Programmes</div>
      {filters.map(filter => {
        return (
          <div className='filter-row' key={filter}>
            <input type='checkbox' name={filter} />
            <label>{filter}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
