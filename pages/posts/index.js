import React from 'react'
import { getPostsList } from '../../lib/posts'
import PostsList from '../../components/postsList'

const Posts = ({postsList}) => {
  return postsList.data.map((post) => {
    return <PostsList {...{post}}/>
  })
}

export const getServerSideProps = async (context) => {
  const postsList = await getPostsList()
  return {
    props: {
      postsList
    }
  }
}

export default Posts