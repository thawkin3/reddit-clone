import React from 'react'
import { Link } from 'react-router-dom'

export const SubredditPage = () => (
  <>
    <h2>Subreddit page</h2>
    <div>
      <Link to="/post/1">post 1</Link>
    </div>
    <div>
      <Link to="/post/2">post 2</Link>
    </div>
    <div>
      <Link to="/post/3">post 3</Link>
    </div>
  </>
)
