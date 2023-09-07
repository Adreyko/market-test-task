import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

const Sort = () => {
  return (
    <FormControl>
      <Box sx={{ display: "flex", width: "50%" }}>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          style={{ marginRight: "10px" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Cheapest</MenuItem>
          <MenuItem value={20}>Most expansive</MenuItem>
          <MenuItem value={30}>Top-rated</MenuItem>
        </Select>
        <Select style={{ marginRight: "10px" }} value={"condition"}>
          <MenuItem value={"condition"}>condition</MenuItem>
        </Select>
        <Select style={{ marginRight: "10px" }} value={"delivery option"}>
          <MenuItem value={"delivery option"}>condition</MenuItem>
        </Select>
      </Box>
    </FormControl>
  );
};

export default Sort;
