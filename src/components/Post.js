import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import './Post.css'

export const Post = ({
  isPreview = false,
  isOnSubreaditPage = false,
  isOnUserPage = false,
  id,
  title,
  voteCount = 0,
  commentCount = 0,
  subreaditName,
  userName,
}) => (
  <Card>
    <p className="postLocation">
      Posted
      {!isOnUserPage && (
        <span className="postUser">
          {' '}
          by <Link to={`/user/${userName}`}>u/{userName}</Link>
        </span>
      )}
      {!isOnSubreaditPage && (
        <span className="postSubreadit">
          {' '}
          in <Link to={`/subreadit/${subreaditName}`}>r/{subreaditName}</Link>
        </span>
      )}
    </p>
    {isPreview ? (
      <h3 className="postTitle">
        <Link to={`/post/${id}`}>{title}</Link>
      </h3>
    ) : (
      <h1 className="postTitle">{title}</h1>
    )}
    <p className="postStats">
      <span className="postVoteCount">
        {voteCount} {voteCount === 1 ? 'vote' : 'votes'}
      </span>
      {' | '}
      <span className="postCommentCount">
        {commentCount} {commentCount === 1 ? 'comment' : 'comments'}
      </span>
    </p>
  </Card>
)
