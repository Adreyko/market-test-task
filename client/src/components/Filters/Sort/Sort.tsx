/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { handleSort } from "../../../utils/handlers/sortHandler";
import { useAppDispatch } from "../../../redux/hooks/redux-hook";
import { setSortBy as setSortByRedux } from "../../../redux/slices/sortSlice";
const Sort = () => {
  const [sortyBy, setSortBy] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (sortyBy) {
      dispatch(setSortByRedux(sortyBy));
    }
  }, [sortyBy]);
  return (
    <FormControl>
      <Box sx={{ display: "flex", width: "100%" }}>
        <InputLabel id="select-sort">Sort by</InputLabel>
        <Select
          sx={{ minWidth: "160px" }}
          displayEmpty
          style={{ marginRight: "10px" }}
          labelId="select-sort"
          id="simple-select"
          label="Sort by"
          name="sortBy"
          value={sortyBy}
          onChange={(e) => handleSort(e, setSortBy)}
        >
          <MenuItem value={"cheapest"}>Cheapest</MenuItem>
          <MenuItem value={"expensive"}>Most expansive</MenuItem>
          <MenuItem value={"top"}>Top-rated</MenuItem>
        </Select>
      </Box>
    </FormControl>
  );
};

export default Sort;
