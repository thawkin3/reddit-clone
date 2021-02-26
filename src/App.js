import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Nav } from './components/Nav'
import { HomePage } from './pages/HomePage'
import { PostPageWithRouter } from './pages/PostPage'
import { SubreaditPageWithRouter } from './pages/SubreaditPage'
import { UserPageWithRouter } from './pages/UserPage'
import './App.css'

export function App() {
  return (
    <Router basename="/reddit-clone/build">
      <div>
        <Nav />
        <main>
          <Switch>
            <Route path="/subreadit/:id">
              <SubreaditPageWithRouter />
            </Route>
            <Route path="/post/:id">
              <PostPageWithRouter />
            </Route>
            <Route path="/user/:id">
              <UserPageWithRouter />
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
