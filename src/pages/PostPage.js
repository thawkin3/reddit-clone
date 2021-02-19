import React from 'react'
import { Post } from '../components/Post'
import { Comment } from '../components/Comment'
import './PostPage.css'

export const PostPage = () => (
  <div className="postPage">
    <Post
      title="Post 1"
      voteCount={100}
      commentCount={20}
      subreaditName="1964"
      userName="JohnDoe"
    />
    <h3>Comments</h3>
    <div className="commentsSection">
      <Comment
        isOnPostPage
        commentContent="This is my comment here."
        voteCount={50}
        userName="JaneDoe"
      />
      <Comment
        isOnPostPage
        commentContent="This is another comment."
        voteCount={20}
        userName="MattSmith"
      />
      <Comment
        isOnPostPage
        commentContent="This is a snarky comment."
        voteCount={10}
        userName="EmilyVanWagner"
      />
    </div>
  </div>
)
