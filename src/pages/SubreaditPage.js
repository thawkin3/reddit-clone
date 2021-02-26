import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { withRouter } from 'react-router-dom'
import { Subreadit } from '../components/Subreadit'
import { Post } from '../components/Post'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { ErrorMessage } from '../components/ErrorMessage'
import './SubreaditPage.css'

export const SubreaditPage = ({ match }) => {
  const FETCH_SUBREADIT_WITH_POSTS = gql`
    query FetchSubreaditWithPosts {
      querySubreadit(filter: { name: { eq: "${match.params.id}" } }) {
        name
        description
        posts {
          id
          title
          user {
            userName
          }
          voteCount
          commentsAggregate {
            count
          }
        }
      }
    }
  `

  const { loading, data, error } = useQuery(FETCH_SUBREADIT_WITH_POSTS)

  return (
    <div className="subreaditPage">
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      {data &&
        (data?.querySubreadit.length ? (
          <>
            <Subreadit
              title={data.querySubreadit[0].name}
              description={data.querySubreadit[0].description}
            />
            <h2>Posts</h2>
            <div className="postsSection">
              {data.querySubreadit[0].posts.length ? (
                data.querySubreadit[0].posts.map(post => (
                  <Post
                    key={post.id}
                    isPreview
                    isOnSubreaditPage
                    id={post.id}
                    title={post.title}
                    voteCount={post.voteCount}
                    commentCount={post.commentsAggregate?.count}
                    subreaditName={data.querySubreadit[0].name}
                    userName={post.user.userName}
                  />
                ))
              ) : (
                <p>No posts yet!</p>
              )}
            </div>
          </>
        ) : (
          <ErrorMessage />
        ))}
    </div>
  )
}

export const SubreaditPageWithRouter = withRouter(SubreaditPage)
