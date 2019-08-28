import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Categories = () => {
  return (
    <>
      <main>
        <section className="meal-category-section">
          <h2>What are you in the mood for today?</h2>
          <section className="category-section">
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
            <section className="category"></section>
          </section>
        </section>
      </main>
    </>
  )
}

export default Categories
