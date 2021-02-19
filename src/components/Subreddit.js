import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import './Subreddit.css'

export const Subreddit = ({ routePath, title, description }) => (
  <Card>
    <h3 className="subredditTitle">
      <Link to={routePath}>{title}</Link>
    </h3>
    <p className="subredditDescription">{description}</p>
  </Card>
)
