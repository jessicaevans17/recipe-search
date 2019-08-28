import React, { Component } from "react"
import NavBar from "./components/NavBar"
import Categories from "./components/Categories"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Categories />
      </>
    )
  }
}

export default App
