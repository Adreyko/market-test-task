import { useEffect, useState } from "react";
import { SearchStyle } from "./SeachThemeMui";
import { SearchIconWrapper } from "./SeachThemeMui";
import { StyledInputBase } from "./SeachThemeMui";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../../../redux/hooks/redux-hook";
import { setSearchedProducts } from "../../../redux/slices/searchSlice";
const Search = () => {
  const [searchByName, setSearchByName] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setSearchedProducts(searchByName));
  }, [searchByName]);
  return (
    <SearchStyle>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={(e) => setSearchByName(e.target.value)}
        sx={{
          width: "100%",
        }}
        value={searchByName}
        placeholder="Search"
        type="search"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchStyle>
  );
};

export default Search;
