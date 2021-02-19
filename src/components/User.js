import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import './User.css'

export const User = ({
  isPreview,
  postCount,
  commentCount,
  userName,
  userId,
  bio,
}) => (
  <Card>
    {isPreview ? (
      <h3 className="userName">
        <Link to={`/users/${userId}`}>{userName}</Link>
      </h3>
    ) : (
      <>
        <h1 className="userName">{userName}</h1>
        <p>{bio}</p>
      </>
    )}
    <p className="userStats">
      <span className="userPostCount">{postCount} posts</span>{' '}
      <span className="userCommentCount">{commentCount} comments</span>
    </p>
  </Card>
)
