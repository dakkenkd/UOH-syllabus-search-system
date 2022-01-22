import { React, useRef } from "react";
import './SearchForm.css';
export const SearchForm = (props) => {
const { onClick, searchText } = props;
  const textRef = useRef(null);
  return (
    <>
      <div className="input-area">
        <input ref={textRef} className="text-input" />
        <button className="input-button" onClick={onClick}>検索</button>
      </div>
    </>
  );
}
