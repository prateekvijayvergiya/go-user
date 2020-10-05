import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styles from '../../styles/Profile.module.css'

const Profile = ({userData}) => {
  const {title='mr', phone='1234567890', firstName, lastName, picture, dateOfBirth, gender, email, location: {city, street, country}} = userData
  return (
    <Box>
      <Grid container>
        <Grid item lg={4} xs={12} className={styles.container}>
          <img src={picture} className={styles.image}/>
        </Grid>
        <Grid item container lg={4} xs={12} className={styles.container}>
          <Grid item>
            <Typography variant={'h4'}>
              {`${title} ${firstName} ${lastName}`}
            </Typography>
            <Typography variant={'h6'}>Gender: {gender}</Typography>
            <Typography variant={'h6'}>Date Of Birth: {dateOfBirth}</Typography>
            <Typography variant={'h6'}>Email: {email}</Typography>
            <Typography variant={'h6'}>Phone: {phone}</Typography>
          </Grid>
        </Grid>
        <Grid item container lg={4} xs={12} className={styles.container}>
          <Grid item xs={12}>
            <Typography variant={'h4'}>Address</Typography>
            <Typography variant={'h6'}>{`${street}, ${city}, ${country}`}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile