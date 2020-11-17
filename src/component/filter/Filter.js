import React from "react";
import style from "./Filter.module.css";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const Filter = ({ userFilter }) => {
  const handleFilter = ({ target }) => {
    // console.log(target.value);
    userFilter(target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <p className={style.lable__style}>Find contacts by name</p>

      <TextField
        id="filled-basic"
        label="Enter contact name:"
        variant="filled"
        onChange={handleFilter}
      />
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  userFilter: PropTypes.func.isRequired,
};
