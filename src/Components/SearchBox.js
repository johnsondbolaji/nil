import React from "react";

const SearchBox = ({ searchTerm, SetSearchTerm }) => {
  return (
    <div>
      <input
        className={"bg-light-green dib br3 pa2 ma2 bw2 shado-5"}
        type="text"
        placeholder="Search Portfolio"
        onChange={SetSearchTerm}
      />
    </div>
  );
};

export default SearchBox;
