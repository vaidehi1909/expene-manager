import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchBox = (props) => {
  const search = (value) => {
    props.search(value);
  };

  return (
    <>
      <Search
        placeholder="Search Title"
        allowClear
        onSearch={(value) => {
          search(value);
        }}
        style={{
          width: 200,
        }}
      />
    </>
  );
};

export default SearchBox;
