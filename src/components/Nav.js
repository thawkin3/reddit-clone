import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => (
  <nav>
    <span className="appName">Readit</span>
    <Link to="/">Home</Link>
  </nav>
)
