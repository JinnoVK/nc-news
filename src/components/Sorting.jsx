import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link, useLocation } from "react-router-dom";

const Sorting = () => {
  const { pathname } = useLocation();
  const [sortType, setSortType] = React.useState("");

  const handleSelectChange = (event, newValue) => {
    setSortType(event.target.value);
  };
  return (
    <div>
      <FormControl className="sort" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Sort!</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={sortType}
          label="Sort!"
          onChange={handleSelectChange}
        >
          <MenuItem value="asc">
            <Link className="sortLinks" to={`${pathname}?order=asc`}>
              Ascending
            </Link>
          </MenuItem>
          <MenuItem value="desc">
            <Link className="sortLinks" to={`${pathname}?order=desc`}>
              Descending
            </Link>
          </MenuItem>
          <MenuItem value="date">
            <Link className="sortLinks" to={`${pathname}?sort=created_at`}>
              Date
            </Link>
          </MenuItem>
          <MenuItem value="comments">
            <Link className="sortLinks" to={`${pathname}?sort=comment_count`}>
              Comment count
            </Link>
          </MenuItem>
          <MenuItem value="votes">
            <Link className="sortLinks" to={`${pathname}?sort=votes`}>
              Votes
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sorting;
