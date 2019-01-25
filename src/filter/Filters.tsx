import * as React from "react";
export interface IProps {
  filters: String[];
}

const Filters: React.SFC<IProps> = props => {
  let filters = props.filters;

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
