import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import './User.css'

export const User = ({
  isPreview = false,
  postCount = 0,
  commentCount = 0,
  userName,
  bio,
}) => (
  <Card>
    {isPreview ? (
      <h3 className="userName">
        <Link to={`/user/${userName}`}>u/{userName}</Link>
      </h3>
    ) : (
      <h1 className="userName">{userName}</h1>
    )}
    <p>{bio}</p>
    <p className="userStats">
      <span className="userPostCount">
        {postCount} {postCount === 1 ? 'post' : 'posts'}
      </span>
      {' | '}
      <span className="userCommentCount">
        {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
      </span>
    </p>
  </Card>
)
