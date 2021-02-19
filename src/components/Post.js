import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import './Post.css'

export const Post = ({
  isPreview,
  routePath,
  title,
  voteCount,
  commentCount,
  subredditName,
  subredditId,
  userName,
  userId,
}) => (
  <Card>
    <p className="postLocation">
      <span className="postSubreddit">
        <Link to={`/subreddit/${subredditId}`}>{subredditName}</Link>
      </span>{' '}
      <span className="postUser">
        Posted by <Link to={`/user/${userId}`}>{userName}</Link>
      </span>
    </p>
    <h3 className="postTitle">
      {isPreview ? <Link to={routePath}>{title}</Link> : title}
    </h3>
    <p className="postStats">
      <span className="postVoteCount">{voteCount} votes</span>{' '}
      <span className="postCommentCount">{commentCount} comments</span>
    </p>
  </Card>
)
