import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

const SearchBar = () => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <IconButton
            style={{ backgroundColor: "#f0f0f0", borderRadius: "0 4px 4px 0" }}
            aria-label="search"
          >
            <SearchIcon style={{ color: "gray" }} />
          </IconButton>
        ),
        style: { borderRadius: "4px", backgroundColor: "#f0f0f0" },
      }}
    />
  );
};

export default SearchBar;
