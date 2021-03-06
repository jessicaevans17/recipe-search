import React, { Component, useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Categories from "./components/Categories"
import CategoryPage from "./components/CategoryPage"
import RecipePage from "./components/RecipePage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Categories}></Route>
            <Route exact path="/:category" component={CategoryPage}></Route>
            <Route
              exact
              path="/:category/:recipe"
              component={RecipePage}
            ></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
