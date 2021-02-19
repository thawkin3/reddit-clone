import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import './Comment.css'

export const Comment = ({ commentContent, voteCount, userName, userId }) => (
  <Card>
    <p className="commentUser">
      Posted by <Link to={`/user/${userId}`}>{userName}</Link>
    </p>
    <p className="commentContent">{commentContent}</p>
    <p className="commentVoteCount">{voteCount} votes</p>
  </Card>
)
