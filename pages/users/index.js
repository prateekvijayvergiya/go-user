import React from 'react'
import Grid from '@material-ui/core/Grid'
import { getAllUsers } from '../../lib/users'
import UserCard from '../../components/card'

const Users = ({allUsers}) => {
  return (
    <Grid container spacing={5} justify="space-evenly">
      {allUsers.data.map(({id, firstName, email, picture}) => (
        <Grid item xs={6} lg={2} md={4} key={id}>
          <UserCard {...{name: firstName, id, email, image: picture}}/>
        </Grid>
      ))}
    </Grid>
  )
}

export const getStaticProps = async () => {
  const allUsers = await getAllUsers()
  return {
    props: {
      allUsers
    }
  }
}

export default Users