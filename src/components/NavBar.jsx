import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const NavBar = () => {
  const element = <FontAwesomeIcon icon={faUtensils} />
  return (
    <>
      <nav>
        <header>
          <h1>
            <Link to={"/"}>What's for Dinner? </Link>
          </h1>
        </header>
        <section className="search-section">
          <input
            type="text"
            placeholder="Find a recipe."
            className="recipe-input"
          ></input>
          <button className="search-button">{element}</button>
        </section>
      </nav>
    </>
  )
}

export default NavBar
