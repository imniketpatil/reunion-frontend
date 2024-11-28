import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types"; // To validate the props

export default function DropDown({ label, data }) {
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: "100%", minWidth: 140 }}>
      {label && <InputLabel>{label}</InputLabel>}{" "}
      {/* Conditionally render label */}
      <Select
        value={selectedValue}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        label={label} // Associate the label with the select dropdown
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data?.map((value, index) => {
          return (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

// Prop validation
DropDown.propTypes = {
  label: PropTypes.string, // Optional label prop
  data: PropTypes.array.isRequired, // 'data' must be an array
};
