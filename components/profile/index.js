import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Profile = ({userData}) => {
  const classes = useStyles()
  const {title='mr', phone='1234567890', firstName, lastName, picture, dateOfBirth, gender, email, location} = userData || {}
  const {city='Udaipur', street='408, Hiran Magri', country='India'} = location || {}
  return (
    <Box className={classes.box}>
      <Grid container>
        <Grid item lg={4} md={4} xs={12} className={classes.container}>
          <img src={picture} className={classes.image}/>
        </Grid>
        <Grid item container lg={4} md={4} xs={12} className={classes.container}>
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
        <Grid item container lg={4} md={4} xs={12} className={classes.container}>
          <Grid item xs={12}>
            <Typography variant={'h4'}>Address</Typography>
            <Typography variant={'h6'}>{`${street}, ${city}, ${country}`}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: 400,
    height: 400,
    padding: 64,
    [theme.breakpoints.down('md')]: {
      padding: 36,
    },
  },
  box: {
    border: '2px solid black',
    borderRadius: 8,
    margin: 20,
  }
}))

export default Profile