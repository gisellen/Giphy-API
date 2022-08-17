import Search from "./Search";
import "../App.css";
import GifCard from "./gifCard";
import axios from "axios";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trending, search, random } from "../redux/options";

export default function Main() {
  //redux
  const options = useSelector((state) => state.options.value);
  const dispatch = useDispatch();
  //states
  const [test, setTest] = useState(options);


  //render
  return (
    <div className="center">
      <button className="button" onClick={() => dispatch(search())}>
        Search
      </button>
      <button className="button" onClick={() => dispatch(trending())}>
        Trending
      </button>
      <button className="button random-button" onClick={() => dispatch(random())}>
        Random
      </button>
      <br />
    </div>
  );
}
