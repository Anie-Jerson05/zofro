import "./menuBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setActiveButton }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchHandeler = () => {
    if (keyword.length == 0) {
      setActiveButton(null);
      navigate("/menu");
    } else {
      navigate("/menu?keyword=" + keyword);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search coffee..."
        onChange={(e) => setKeyword(e.target.value)}
        onBlur={() => {
          searchHandeler();
        }}
      />

      <button
        className="search-btn"
        onClick={() => {
          searchHandeler();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
