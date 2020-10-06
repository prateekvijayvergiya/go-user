import React, { Fragment } from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import styles from '../styles/Home.module.css'
import { Button, Typography } from '@material-ui/core'

export default function Home() {
  return (
    <Fragment>
      <Grid container alignItems={'center'}>
        <Grid item xs={6} sm={6}>
          <img className={styles.image} src='/detective.jpg' alt='detective doggo'/>
        </Grid>
        <Grid container spacing={6} item xs={6} sm={6} direction={'column'} alignItems={'center'}>
          <Grid item>
            <Typography variant={'h4'}>
              Welcome to Next level React with NEXT.js
            </Typography>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained">
              <Link href="/users">
                <a>Start Hacking</a>
              </Link>
            </Button>
            <Button color="primary" variant="outlined">
              <Link href="/posts">
                <a>Start Exploring</a>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}
