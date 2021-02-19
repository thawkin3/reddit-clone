import React from 'react'
import { Subreddit } from '../components/Subreddit'
import { User } from '../components/User'
import './HomePage.css'

export const HomePage = () => (
  <div className="homePage">
    <p>Welcome to Reddit! Find a subreddit to browse or user to follow.</p>
    <h2>Popular Subreddits</h2>
    <div className="subredditsSection">
      <Subreddit
        title="Subreddit 1"
        description="Something about this"
        routePath="/subreddit/1"
      />
      <Subreddit
        title="Subreddit 2"
        description="Something about this"
        routePath="/subreddit/2"
      />
      <Subreddit
        title="Subreddit 3"
        description="Something about this"
        routePath="/subreddit/3"
      />
    </div>
    <h2>Popular Users</h2>
    <div className="usersSection">
      <User
        isPreview
        postCount={10}
        commentCount={15}
        userName="John Doe"
        userId={1}
      />
      <User
        isPreview
        postCount={20}
        commentCount={25}
        userName="Jane Doe"
        userId={2}
      />
      <User
        isPreview
        postCount={30}
        commentCount={35}
        userName="Matt Smith"
        userId={3}
      />
    </div>
  </div>
)
