import React from 'react'
import { Subreadit } from '../components/Subreadit'
import { Post } from '../components/Post'
import './SubreaditPage.css'

export const SubreaditPage = () => (
  <div className="subreaditPage">
    <Subreadit
      title="1984"
      description="A dystopian social science fiction novel by English novelist George Orwell."
    />
    <h3>Posts</h3>
    <div className="postsSection">
      <Post
        isPreview
        isOnSubreaditPage
        id={1}
        title="Post 1"
        voteCount={100}
        commentCount={20}
        subreaditName="1984"
        userName="JohnDoe"
      />
      <Post
        isPreview
        isOnSubreaditPage
        id={2}
        title="Post 2"
        voteCount={200}
        commentCount={25}
        subreaditName="1984"
        userName="JaneDoe"
      />
      <Post
        isPreview
        isOnSubreaditPage
        id={3}
        title="Post 3"
        voteCount={300}
        commentCount={28}
        subreaditName="1984"
        userName="MattSmith"
      />
    </div>
  </div>
)
