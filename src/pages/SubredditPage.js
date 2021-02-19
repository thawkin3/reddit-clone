import React from 'react'
import { Post } from '../components/Post'

export const SubredditPage = () => (
  <div className="subredditPage">
    <h2>Subreddit page</h2>
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
)
