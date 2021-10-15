import { useState } from "react";
import AddNewRest from "./restaurant/AddNewRest";
import { Link, Switch, Route } from "react-router-dom";

const padding = {
  padding: 5,
}
const Home = () => {

  return (
    <div>
      <header>
        <h1>GuideMe</h1>
        <p>A community-driven application to help you 
          find the best services in any place you go</p>
      </header>
      <main>
        what are you looking for ?
        <br/>
        <Link style={padding} to='/search'>search by location</Link>
        <br/>
        <div >
          <strong>Help our community to grow!</strong>
          <br/>
          <Link stile = {padding} to='/new-restaurant'>add a Restaurant</Link>
        </div>
      </main>
    </div>
  )
}

export default Home;