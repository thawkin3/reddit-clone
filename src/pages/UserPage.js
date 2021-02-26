import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { withRouter } from 'react-router-dom'
import { User } from '../components/User'
import { Post } from '../components/Post'
import { Comment } from '../components/Comment'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { ErrorMessage } from '../components/ErrorMessage'
import './UserPage.css'

export const UserPage = ({ match }) => {
  const FETCH_USER = gql`
    query FetchUser {
      queryUser(filter: { userName: { eq: "${match.params.id}" } }) {
        userName
        bio
        posts {
          id
          title
          user {
            userName
          }
          subreadit {
            name
          }
          voteCount
          commentsAggregate {
            count
          }
        }
        postsAggregate {
          count
        }
        comments {
          id
          commentContent
          voteCount
          user {
            userName
          }
          post {
            title
            id
          }
        }
        commentsAggregate {
          count
        }
      }
    }
  `

  const { loading, data, error } = useQuery(FETCH_USER)

  return (
    <div className="userPage">
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      {data &&
        (data?.queryUser.length ? (
          <>
            <User
              userName={data.queryUser[0].userName}
              bio={data.queryUser[0].bio}
              postCount={data.queryUser[0].postsAggregate?.count}
              commentCount={data.queryUser[0].commentsAggregate?.count}
            />
            <h2>Posts</h2>
            <div className="postsSection">
              {data.queryUser[0].posts.length ? (
                data.queryUser[0].posts.map(post => (
                  <Post
                    key={post.id}
                    isPreview
                    isOnUserPage
                    id={post.id}
                    title={post.title}
                    voteCount={post.voteCount}
                    commentCount={post.commentsAggregate?.count}
                    subreaditName={post.subreadit.name}
                    userName={post.user.userName}
                  />
                ))
              ) : (
                <p>No posts yet!</p>
              )}
            </div>
            <h2>Comments</h2>
            <div className="commentsSection">
              {data.queryUser[0].comments.length ? (
                data.queryUser[0].comments.map(comment => (
                  <Comment
                    key={comment.id}
                    isOnUserPage
                    postTitle={comment.post.title}
                    postId={comment.post.id}
                    commentContent={comment.commentContent}
                    voteCount={comment.voteCount}
                    userName={comment.user.userName}
                  />
                ))
              ) : (
                <p>No comments yet!</p>
              )}
            </div>
          </>
        ) : (
          <ErrorMessage />
        ))}
    </div>
  )
}

export const UserPageWithRouter = withRouter(UserPage)
