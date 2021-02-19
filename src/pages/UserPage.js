import React from 'react'
import { User } from '../components/User'
import { Post } from '../components/Post'
import { Comment } from '../components/Comment'
import './UserPage.css'

export const UserPage = () => (
  <div className="userPage">
    <User
      isPreview={false}
      postCount={10}
      commentCount={15}
      userName="John Doe"
      userId={1}
      bio="Hi, this is a little about me."
    />
    <h2>User's Posts</h2>
    <div className="postsSection">
      <Post
        isPreview
        routePath="/post/1"
        title="Post 1"
        voteCount={100}
        commentCount={20}
        subredditName="Subreddit 1"
        subredditId={1}
        userName="John Doe"
        userId={1}
      />
      <Post
        isPreview
        routePath="/post/2"
        title="Post 2"
        voteCount={200}
        commentCount={20}
        subredditName="Subreddit 2"
        subredditId={2}
        userName="John Doe"
        userId={2}
      />
      <Post
        isPreview
        routePath="/post/3"
        title="Post 3"
        voteCount={300}
        commentCount={20}
        subredditName="Subreddit 3"
        subredditId={3}
        userName="John Doe"
        userId={3}
      />
    </div>
    <h2>User's Comments</h2>
    <div className="commentsSection">
      <Comment
        commentContent="This is my comment here."
        voteCount={50}
        userName="John Doe"
        userId={1}
      />
      <Comment
        commentContent="This is another comment."
        voteCount={20}
        userName="John Doe"
        userId={1}
      />
      <Comment
        commentContent="This is a snarky comment."
        voteCount={10}
        userName="John Doe"
        userId={1}
      />
    </div>
  </div>
)
