import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => (
  <nav>
    <h1>Reddit</h1>
    <Link to="/">Home</Link>
  </nav>
)
