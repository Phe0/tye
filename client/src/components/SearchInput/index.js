import React from "react";
import SearchIcon from "../../assets/searchIcon";
import "./style.scss";

export default function SearchInput({ placeholder, value, onChange }) {
  return (
    <section className="search">
      <SearchIcon />
      <input
        className="search__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </section>
  );
}
