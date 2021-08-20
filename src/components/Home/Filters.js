import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {setCategory, setFilter} from '../../redux/reducers/filtersSlice'

const Filters = {
  Category: function ({ name }) {
    const dispatch = useDispatch();
    const handleOnChangeCategory = (e) => {
      setChecked(true);
      dispatch(setCategory(e.target.value.toLowerCase()));
    };
    const [checked, setChecked] = useState(false);
    return (
      <div className="mt-2 mb-2 pl-2">
        <div className="custom-control custom-checkbox">
          <input
            type="radio"
            onChange={handleOnChangeCategory}
            name="category"
            value={name}
            className="custom-control-input"
            id={name} 
            checked= {checked}
          />
          &nbsp;
          <label className="custom-control-label" htmlFor={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
  Filter: function ({ name }) {
  
    const handleOnChangeFilter = (e) => {
      //const value = e.target.value.toUpperCase();
      console.log("salut");
      //setFilter(value);
    };
    return (
      <div className="mt-2 mb-2 pl-2">
        <div className="custom-control custom-checkbox">
          <input
            name={name}
            onChange={handleOnChangeFilter}
            type="checkbox"
            className="custom-control-input"
            id={name}
          />
          &nbsp;
          <label className="custom-control-label" htmlFor={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
};
export default Filters;
