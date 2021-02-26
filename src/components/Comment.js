import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import './Comment.css'

export const Comment = ({
  commentContent,
  voteCount = 0,
  userName,
  postTitle,
  postId,
  isOnUserPage,
  isOnPostPage,
}) => (
  <Card>
    <p className="commentLocation">
      Commented
      {!isOnUserPage && (
        <span className="commentUser">
          {' '}
          by <Link to={`/user/${userName}`}>u/{userName}</Link>
        </span>
      )}
      {!isOnPostPage && (
        <span className="commentPost">
          {' '}
          on <Link to={`/post/${postId}`}>{postTitle}</Link>
        </span>
      )}
    </p>
    <p className="commentContent">{commentContent}</p>
    <p className="commentVoteCount">
      {voteCount} {voteCount === 1 ? 'vote' : 'votes'}
    </p>
  </Card>
)
