import React from 'react';

import AppsIcon from '@material-ui/icons/Apps';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const Title = () => {
  return (
    <Paper elevation="12">
      <AppsIcon svgColor="blue" fontSize="144px"></AppsIcon>
      <Typography variant="h3" color="inherit" align="center">
        Web App By Edge Browser
      </Typography>
      <Typography variant="h5" color="inherit" align="center">
          Web Apps list here are tested in the Windows Desktop Platform
          with Edge browser.
      </Typography>
    </Paper>
  )
}

export default Title;
