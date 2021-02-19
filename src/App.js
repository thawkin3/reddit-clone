import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Nav } from './Nav'
import { HomePage } from './pages/HomePage'
import { PostPage } from './pages/PostPage'
import { SubredditPage } from './pages/SubredditPage'
import { UserPage } from './pages/UserPage'
import './App.css'

export function App() {
  return (
    <Router basename="/reddit-clone/build">
      <div>
        <Nav />
        <main>
          <Switch>
            <Route path="/subreddit/:id">
              <SubredditPage />
            </Route>
            <Route path="/post/:id">
              <PostPage />
            </Route>
            <Route path="/user/:id">
              <UserPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}
