import React from 'react';

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import PwaList from './PwaList'
import PwaDetail from './PwaDetail'

const Pwas = ({ pwas, selectedPwa, onPwaSelect }) => {

  return (
    <Paper>
      <Grid style={{ justifyContent:"center", marginBottom:"5px"}} container spacing={1}>
        <Grid item xs={6}>
          {/* Video List */}
          <PwaList pwas={ pwas } onPwaSelect={ onPwaSelect }/>
        </Grid>
        <Grid item xs={6}>
          {/* VIDEO Details */}
          <PwaDetail selectedPwa={ selectedPwa }/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Pwas;
