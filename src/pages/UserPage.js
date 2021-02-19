import React from 'react'
import { User } from '../components/User'
import { Post } from '../components/Post'
import { Comment } from '../components/Comment'
import './UserPage.css'

export const UserPage = () => (
  <div className="userPage">
    <User
      postCount={10}
      commentCount={15}
      userName="JohnDoe"
      bio="Hi, this is a little about me."
    />
    <h2>JohnDoe's Posts</h2>
    <div className="postsSection">
      <Post
        isPreview
        isOnUserPage
        id={1}
        title="Post 1"
        voteCount={100}
        commentCount={12}
        subreaditName="1984"
        userName="JohnDoe"
      />
      <Post
        isPreview
        isOnUserPage
        id={2}
        title="Post 2"
        voteCount={200}
        commentCount={25}
        subreaditName="fahrenheit451"
        userName="JohnDoe"
      />
      <Post
        isPreview
        isOnUserPage
        id={3}
        title="Post 3"
        voteCount={300}
        commentCount={44}
        subreaditName="thecatcherintherye"
        userName="JohnDoe"
      />
    </div>
    <h2>JohnDoe's Comments</h2>
    <div className="commentsSection">
      <Comment
        isOnUserPage
        postTitle="Post 1"
        postId={1}
        commentContent="This is my comment here."
        voteCount={50}
        userName="JohnDoe"
      />
      <Comment
        isOnUserPage
        postTitle="Post 2"
        postId={2}
        commentContent="This is another comment."
        voteCount={20}
        userName="JohnDoe"
      />
      <Comment
        isOnUserPage
        postTitle="Post 3"
        postId={3}
        commentContent="This is a snarky comment."
        voteCount={10}
        userName="JohnDoe"
      />
    </div>
  </div>
)
