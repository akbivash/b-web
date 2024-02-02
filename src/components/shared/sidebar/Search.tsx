import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="flex sidebar-content   rounded-sm relative ">
      <input
        type="text"
        className="sidebar-content rounded-sm outline-none search-input focus:border-orange-default border-sm border-gray-light  p-xs"
        placeholder="Search..."
      />
      <div className="absolute sidebar-content  right-0 hover:bg-orange-default rounded-sm hover:text-white border-l-sm focus:border-orange-default cursor-pointer  border-gray-light search-icon p-xs  ">
        <SearchIcon  />
      </div>
    </div>
  );
};

export default Search;
