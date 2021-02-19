import React from 'react'
import { Post } from '../components/Post'
import { Comment } from '../components/Comment'
import './PostPage.css'

export const PostPage = () => (
  <div className="postPage">
    <Post
      isPreview={false}
      title="Post 1"
      voteCount={100}
      commentCount={20}
      subredditName="Subreddit 1"
      subredditId={1}
      userName="John Doe"
      userId={1}
    />
    <h3>Comments</h3>
    <div className="commentsSection">
      <Comment
        commentContent="This is my comment here."
        voteCount={50}
        userName="Jane Doe"
        userId={2}
      />
      <Comment
        commentContent="This is another comment."
        voteCount={20}
        userName="Matt Smith"
        userId={3}
      />
      <Comment
        commentContent="This is a snarky comment."
        voteCount={10}
        userName="Emily VanWagner"
        userId={4}
      />
    </div>
  </div>
)
