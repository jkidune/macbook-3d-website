import React from 'react'
import { navLinks } from '../constants/index.js'

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="./logo.svg" alt="logo" />
        <ul>
          {navLinks.map((item) => (
            <li key={item.name}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
        <button>
            <img src="./search.svg" alt="search" />
        </button>
        <button>
            <img src="./cart.svg" alt="cart" />
        </button>
        </div>

      </nav>
    </header>
  )
}

export default NavBar