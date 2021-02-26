import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Subreadit } from '../components/Subreadit'
import { User } from '../components/User'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { ErrorMessage } from '../components/ErrorMessage'
import './HomePage.css'

const FETCH_SUBREADITS_AND_USERS = gql`
  query FetchSubreaditsAndUsers {
    querySubreadit {
      name
      description
    }
    queryUser {
      userName
      bio
      postsAggregate {
        count
      }
      commentsAggregate {
        count
      }
    }
  }
`

export const HomePage = () => {
  const { loading, data, error } = useQuery(FETCH_SUBREADITS_AND_USERS)

  return (
    <div className="homePage">
      <h1 className="srOnly">Home</h1>
      <p>
        Welcome to Readit, a community of bookworms discussing their favorite
        books! Find a subreadit to browse or a user to follow below.
      </p>
      <h2>Popular Subreadits</h2>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      {data && (
        <div className="subreaditsSection">
          {data.querySubreadit.map(subreadit => (
            <Subreadit
              key={subreadit.name}
              isPreview
              title={subreadit.name}
              description={subreadit.description}
            />
          ))}
        </div>
      )}
      <h2>Popular Users</h2>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      {data && (
        <div className="usersSection">
          {data.queryUser.map(user => (
            <User
              key={user.userName}
              isPreview
              userName={user.userName}
              bio={user.bio}
              postCount={user.postsAggregate?.count}
              commentCount={user.commentsAggregate?.count}
            />
          ))}
        </div>
      )}
    </div>
  )
}
