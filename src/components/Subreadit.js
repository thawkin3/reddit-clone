import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import './Subreadit.css'

export const Subreadit = ({ isPreview = false, title, description }) => (
  <Card>
    {isPreview ? (
      <h3 className="subreaditTitle">
        <Link to={`/subreadit/${title}`}>r/{title}</Link>
      </h3>
    ) : (
      <h1 className="subreaditTitle">r/{title}</h1>
    )}
    <p className="subreaditDescription">{description}</p>
  </Card>
)
