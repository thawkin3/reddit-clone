import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { withRouter } from 'react-router-dom'
import { Post } from '../components/Post'
import { Comment } from '../components/Comment'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { ErrorMessage } from '../components/ErrorMessage'
import './PostPage.css'

export const PostPage = ({ match }) => {
  const FETCH_POST_WITH_COMMENTS = gql`
    query FetchPostWithComments {
      getPost(id: "${match.params.id}") {
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
        comments {
          commentContent
          voteCount
          user {
            userName
          }
        }
      }
    }
  `

  const { loading, data, error } = useQuery(FETCH_POST_WITH_COMMENTS)

  return (
    <div className="postPage">
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      {data &&
        (data.getPost ? (
          <>
            <Post
              title={data.getPost.title}
              voteCount={data.getPost.voteCount}
              commentCount={data.getPost.commentsAggregate?.count}
              subreaditName={data.getPost.subreadit.name}
              userName={data.getPost.user.userName}
            />
            <h2>Comments</h2>
            <div className="commentsSection">
              {data.getPost.comments.length ? (
                data.getPost.comments.map(comment => (
                  <Comment
                    key={comment.commentContent}
                    isOnPostPage
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

export const PostPageWithRouter = withRouter(PostPage)
