import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <header class=" bg-primary-200">
      <nav class="container flex flex-row items-baseline justify-between py-6">
        <Link to="/" class="text-xl font-medium">
          Blog
        </Link>
        <div class="flex flex-row items-baseline justify-end">
          <Link class="font-medium" to="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
