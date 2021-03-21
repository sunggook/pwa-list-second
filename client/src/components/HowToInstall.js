import React from 'react';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const HowToInstall = ( { description, video } ) => {

  // https://www.youtube.com/watch?v=0T3B5BFCurU
  return (
    <div className="how_to_install">
      <Grid container spacing={1}>
        <Grid xs={6}>
          <Card>
            <CardContent>
              <Typography
                color="inherit"
                gutterBottom
                variant="h4"
              >
                How to install Web App in Edge Browser
              </Typography>
                <iframe width="100%" height="315" title="web app install"
                  src={video} ></iframe>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={6}>
          <Card style={{paddingTop:50}}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
              >
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default HowToInstall;
