import React from 'react';
import './search.css';
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = () => (
  <form className="Search">
    <input
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
    />
  </form>
)

export default Search
