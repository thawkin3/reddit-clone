import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => (
  <>
    <h2>Home page</h2>
    <h3>Popular Subreddits</h3>
    <div>
      <Link to="/subreddit/1">Subreddit 1</Link>
    </div>
    <div>
      <Link to="/subreddit/2">Subreddit 2</Link>
    </div>
    <div>
      <Link to="/subreddit/3">Subreddit 3</Link>
    </div>
  </>
)
