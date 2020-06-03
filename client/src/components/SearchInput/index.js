import React from "react";
import SearchIcon from "../../assets/searchIcon";
import "./style.scss";

export default function SearchInput({ placeholder }) {
  return (
    <section className="search">
      <SearchIcon color="#2b3831" />
      <input className="search__input" type="text" placeholder={placeholder} />
    </section>
  );
}
