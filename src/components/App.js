import React, { Component } from "react";
import Main from "./Main";
import Trend from "./Trend";
import Random from "./Random";
import Search from "./Search";

import Giphy from "../assets/giphy_large.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  render() {
    return (
      <div className="App">
        <p className="title"> Giphy Search
        </p>
        <Main />
        <Trend />
        <Random />
        <Search />
        <div className="footer">
          <img className="giphy-img" src={Giphy} height="50px" />
        </div>
      </div>
    );
  }
}
