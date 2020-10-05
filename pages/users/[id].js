import React from 'react'
import Profile from '../../components/profile'
import { getAllIds, getUserDataById } from '../../lib/users'

const UserProfile = ({ userData }) => {
  return (
    <Profile {...{userData}}/>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllIds()
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const userData = await getUserDataById(params.id)
  return {
    props: {
      userData
    }
  }
}

export default UserProfile