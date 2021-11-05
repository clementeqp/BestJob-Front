import search from "../../../assets/icons/search.svg";

// ! SearchBar estatica

export default function SearchBar() {
  return (
    <div className="search-nav">
      <form className="search-bar" action="/" method="get">
        <button type="submit">
          <img src={search} alt=""></img>
        </button>
        <label htmlFor="header-search"></label>
        <input type="text" id="header-search" placeholder="" name="" />
      </form>
    </div>
  );
}
