import React from "react";
import { Link } from "react-router-dom";
import List from "../Components/List";

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to="/intake">Intake</Link>
      <br></br>
      <Link to="/order">Order</Link>
      <List />
    </div>
  );

}
export default Home;
