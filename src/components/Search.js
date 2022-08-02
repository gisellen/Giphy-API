import GifCard from "./gifCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";

export default function Search() {
  //redux
  const options = useSelector((state) => state.options.value);
  //states
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [gif, setGif] = useState([]);
  const [isSearch, setIsSearch] = useState(options);

  useEffect(() => {
    setIsSearch(options);
  });

  //functions
  function handleChange(event) {
    const value = event.target.value;
    setSearch(value);
  }


  async function getSearch() {
    const offset = page * limit - limit;
    return await axios
      .get(`${process.env.REACT_APP_GIPHY_API}/search`, {
        params: {
          search: search,
          offset: offset,
        },
      })
      .then((res) => {
        return res.data.data;
      });
  }

  async function getSearch(offset) {
    return await axios
      .get("/search", {
        params: {
          search: search,
          offset: offset,
        },
      })
      .then((res) => {
        return res.data.data;
      });
  }

  async function handlePage(event, value) {
    //when the page changes, the gif changes as wwell
    const pageValue = value;
    setPage(pageValue);
    let offset = pageValue * limit - limit;
    const gifRequest = await getSearch(offset);
    setGif(gifRequest);
  }

  async function onSubmit() {
    const gifRequest = await getSearch();
    setGif(gifRequest);
  }

  if (isSearch === "search") {
    return (
      <div>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Gif Search"
            onChange={handleChange}
          />
        </form>
        <button className="button" onClick={onSubmit}>
          Submit
        </button>
        {gif.length > 0 ? (
          <div>
            <p>page: {page}</p>
            <Pagination count={10} page={page} onChange={handlePage} />
          </div>
        ) : null}
        {gif.map((gif) => (
          <GifCard id={gif.id} url={gif.images.original.url} />
        ))}
      </div>
    );
  } else return <></>;
}
