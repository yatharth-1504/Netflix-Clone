import "./Home.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured.jsx";
import List from "../../components/list/List";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured type="movie" />
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
}
